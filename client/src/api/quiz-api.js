import axios from 'axios';

export const fetchQuizzes1 = async () => {
    try {
        const res = await axios.get('http://10.100.102.6:5000/admin/view_quizzes');
        console.log(res);
    } catch (error) {
        console.log(`can't fetch the quizzes`, error);
    }
}