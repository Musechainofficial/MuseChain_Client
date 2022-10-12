import { AxiosResponse } from "axios";
import http from "../httpService";
import { AllUserDto } from "./dto/allUserDto";
import { UserDto } from "./dto/userDto";
import { MessageDto } from "src/services/message/dto/messageDto";

class UserService {

    public async getAllUsers(): Promise<AllUserDto[]> {
        let result: AxiosResponse = await http.get('users');
        return result.data;
    }

    public async getUsers(username:string): Promise<UserDto> {
        let result: AxiosResponse = await http.get(`users/${username}`);
        return result.data;
    }

    public async loginUser(data: object | null): Promise<UserDto> {
        let result: AxiosResponse = await http.post('user/login', data);
        return result.data;
    }

    public async registerUser(data: object | null): Promise<UserDto> {
        let result: AxiosResponse = await http.post('user/register', data);
        return result.data;
    }

    public async updateUser(data: object | null): Promise<UserDto> {
        let result: AxiosResponse = await http.post('user/update', data);
        return result.data;
    }

    public async sendVerifyEmail(data: object | null): Promise<MessageDto> {
        let result: AxiosResponse = await http.post('user/sendVerifyEmail', data);
        return result.data;
    }

    public async verifyEmail(data: object | null): Promise<MessageDto> {
        let result: AxiosResponse = await http.post('user/verifyEmail', data);
        return result.data;
    }

    public async sendResetPassword(data: object | null): Promise<MessageDto> {
        let result: AxiosResponse = await http.post('user/valiate', data);
        return result.data;
    }

    public async resetPassword(data: object | null): Promise<MessageDto> {
        let result: AxiosResponse = await http.post('user/resetPassword', data);
        return result.data;
    }
}

export default new UserService();