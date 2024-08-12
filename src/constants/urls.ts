export const baseUrl = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users: {
        base: '/users',
        byId: (id:number):string => urls.users.base + '/' + id
    },
    posts: {
        base: '/posts',
        byPostIdComments: (postId:number):string => urls.posts.base + '/' + postId + urls.comments.base
    },
    comments: {
        base: '/comments'
    }

}