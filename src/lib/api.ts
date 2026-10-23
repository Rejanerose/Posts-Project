import type App from '@/App';
import {create} from 'axios'

const api = create({
    baseURL:"https://jsonplacelder.typicode.com"
})

export default api