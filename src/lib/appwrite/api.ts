import { INewUser } from "@/types";
import { ID, account, appwriteConfig, avatars, databases } from "./config";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(), 
            user.email, 
            user.password, 
            user.name
        )
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl
        })
        
        return newUser;
    } catch (error) {
        console.log(error);
        // return error;
    }
}

export async function saveUserToDB(user: {
    accountId: string,
    name: string,
    email: string,
    username?: string,
    imageUrl: URL
}) {
    try {
        const newUser = databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        )
        return newUser
    } catch (error) {
        console.log(error)
    }
}