import * as dotenv from "dotenv";

export const config = dotenv.config();

export const organiztion: string = 'LearningOS';            // 组织
export const fullOrganization: string = '19380377-learningos-classroom-oscomp'; // classroom名称
export const assignment = 'oscomp-test';   // assignment
export const works = ['all', 'basic_glibc', 'libc_glibc', 'lua_glibc', 'busybox_glibc', 'iozone_glibc', 'basic_musl', 'libc_musl', 'lua_musl', 'busybox_musl', 'iozone_musl']; // assignment 的不同情况
export const AUTH_TOKEN = process.env['TOKEN'];
export const SESSION_TOKEN = process.env['SESSION_TOKEN'];

// JsonData store the grades and the other info.
export let JsonData: ResultObject = {
    available: {},
    // grades has the tree. grades --> studentGithubUsername --> workName --> grade
    students: [],
    // the list of questions
    questions: [],
    // latest update time
    latestUpdatedAt: Date.now()
}


// initialize the JsonData by works
for(let work of works) {
    JsonData['available'][work] = 0;
} 
