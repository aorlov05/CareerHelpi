export interface BasicQuizQuestion {
    name: string,
    options: string[]
}

export interface DetailedQuizQuestion{
    name:string,
    input:string
}

export interface Answer{
    question_name:string;
    question_result:string;
}