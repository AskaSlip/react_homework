import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser";
import {getAllPostsByUserId, getAllUsers} from "../../services/api.service";
import UserComponent from "../user-component/UserComponent";
import {IPost} from "../../models/IPost";
import PostsComponent from "../PostsComponent";
import styles from './UsersComponent.module.css'


const UsersComponent = ()=> {
    const [users, setUsers] = useState<IUser[]>([])
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllUsers().then((users: IUser[]) => {
            setUsers([...users]);
        });
    }, []);


    const getPosts = (id:number) => {
        getAllPostsByUserId(id).then(posts => setPosts([...posts]))
    }



    return (
        <div>
            <div className={styles.usersWrap}>
                {users.map((user: IUser) => (
                        <UserComponent
                            key={user.id}
                            user={user}
                            getPosts = {getPosts}

                        />
                    ))
                }
            </div>

            <div>
                <PostsComponent posts={posts}/>
            </div>



        </div>



    )

}

export default UsersComponent;

