import React, { useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "../modals/IForm";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/userValidator";
import styles from './FormComponent.module.css'
import {IPost} from "../modals/IPost";
import {createPost,getAllPosts} from "../services/api.services";
import PostComponent from "./postComponent";

const FormComponent = () => {

    let {formState: {errors, isValid},
        register,
        handleSubmit}
        = useForm<IForm>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });


    let formPostCreator =  async (data: IForm) => {
        const response = await createPost(data);
        setPosts([...posts,response])
    }


    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllPosts().then(posts => setPosts([...posts]))
    }, []);


    return (
        <div className={styles.wrapper}>
            {errors.userId && <div className={styles.error}>user ID error: {errors.userId?.message}</div>}
            {errors.title && <div className={styles.error}>title error: {errors.title?.message}</div>}
            {errors.body && <div className={styles.error}>text error: {errors.body?.message}</div>}
            <form onSubmit={handleSubmit(formPostCreator)} className={styles.formContent}>
                <label htmlFor="userId">User ID: </label>
                <input type="number" id='userId' {...register('userId')} className={styles.input}/>
                <label htmlFor="title">Title: </label>
                <input type="text" id='title'{...register('title')} className={styles.input}/>
                <label htmlFor="body">Post text: </label>
                <input type="text" id='body' {...register('body')} className={styles.input}/>

                <button disabled={!isValid} className={styles.btn}>Create post</button>

            </form>
            <div>
                <PostComponent posts={posts}/>
            </div>

        </div>
    );
};

export default FormComponent;