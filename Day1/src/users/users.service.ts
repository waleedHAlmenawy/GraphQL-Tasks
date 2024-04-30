import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
@Injectable()
export class UsersService {
 
  constructor(@InjectModel ('users' ) private user , private jwt:JwtService ){}
 
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

 async Log(user , res:Response){
    let foundedUser = await this.user.findOne({email:user.email})
  
    if(!foundedUser){return {message: "Email Not Found ..."}}

    let checkPass =await bcrypt.compare(user.password , foundedUser.password)

    if(!checkPass){return {message: "Wrong ..."}}

   let jwtData= await this.jwt.sign({isAdmin:foundedUser.isAdmin})

    res.header("x-auth-token", jwtData )

    return {message:"logged succesfully"}
}

async Reg(user){

let foundedUser = await this.user.findOne({email:user.email})

if(foundedUser){return {message: "Email already exists ..."}}

let Salt = await bcrypt.genSalt(10)

let passwordHash=await bcrypt.hash(user.password,Salt)

user.password = passwordHash

let newUser = new this.user(user)
await newUser.save()
return {message:"Register success"}

}

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
