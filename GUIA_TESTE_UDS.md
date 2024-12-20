# Guia para Teste Técnico UDS 🚀

## Backend Essencial

### 1. Estrutura Express Básica

javascript
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3001, () => console.log('Server running'));

### 2. Service Pattern (Mais Importante!)

javascript
class MyService {
constructor() {
// Configure axios ou fetch aqui
this.api = axios.create({
baseURL: 'https://api.exemplo.com'
});
}
async getData() {
try {
const response = await this.api.get('/endpoint');
return this.formatData(response.data);
} catch (error) {
throw new Error('Falha ao buscar dados');
}
}
formatData(data) {
// Formatar dados aqui
return data.map(item => ({
id: item.id,
title: item.title
}));
}
}



### 3. Middleware Básico

javascript
const errorHandler = (err, req, res, next) => {
res.status(500).json({ error: err.message });
};
const requestLogger = (req, res, next) => {
console.log(${req.method} ${req.path});
next();
};


## Frontend Essencial

### 1. Service com Axios

javascript
import axios from 'axios';
const api = axios.create({
baseURL: 'http://localhost:3001/api'
});
export const getData = async () => {
const response = await api.get('/data');
return response.data;
};


### 2. Custom Hook Padrão

javascript
const useData = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
const fetchData = async () => {
try {
const result = await getData();
setData(result);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
};
fetchData();
}, []);
return { data, loading, error };
};



## Redux (Se Pedirem!)

### 1. Setup Básico

javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
export const store = configureStore({
reducer: {
data: dataReducer
}
});
// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
const dataSlice = createSlice({
name: 'data',
initialState: {
items: [],
loading: false,
error: null
},
reducers: {
setItems: (state, action) => {
state.items = action.payload;
},
setLoading: (state, action) => {
state.loading = action.payload;
},
setError: (state, action) => {
state.error = action.payload;
}
}
});
export const { setItems, setLoading, setError } = dataSlice.actions;
export default dataSlice.reducer;

### 2. Thunk para Chamadas Assíncronas

javascript
export const fetchData = () => async (dispatch) => {
try {
dispatch(setLoading(true));
const data = await getData();
dispatch(setItems(data));
} catch (error) {
dispatch(setError(error.message));
} finally {
dispatch(setLoading(false));
}
};

### 3. Uso no Componente

javascript
const MyComponent = () => {
const dispatch = useDispatch();
const { items, loading, error } = useSelector(state => state.data);
useEffect(() => {
dispatch(fetchData());
}, [dispatch]);
if (loading) return <Loading />;
if (error) return <Error message={error} />;
return (
<div>
{items.map(item => (
<Item key={item.id} {...item} />
))}
</div>
);
};



## Pontos de Atenção! ⚠️

### Backend
- Sempre use try/catch nas rotas
- Formate dados no service, não nas rotas
- Use middleware para tratamento de erros
- Mantenha as rotas simples e limpas

### Frontend
- Separe lógica de UI (hooks/componentes)
- Trate loading e error states
- Use props typing (mesmo sem TypeScript)
- Mantenha componentes pequenos e focados

### Redux (Se Usar)
- Mantenha actions simples
- Use thunks para async
- Normalize state quando necessário
- Evite duplicar dados no store

## Dicas Gerais 💡

1. Comece pelo mais simples:
   - Backend: rota GET funcionando
   - Frontend: componente listando dados

2. Adicione features gradualmente:
   - Primeiro: dados básicos
   - Depois: loading state
   - Por fim: error handling

3. Mantenha o código limpo:
   - Use nomes claros
   - Comente partes importantes
   - Separe responsabilidades

4. Se der erro:
   - Confira as portas (3000/3001)
   - Verifique o CORS
   - Console.log no backend
   - DevTools no frontend

## Ordem de Desenvolvimento 📝

1. Backend:
   - Setup Express
   - Criar service
   - Implementar rota
   - Testar no Postman/Insomnia

2. Frontend:
   - Setup React
   - Criar service
   - Criar hook
   - Implementar UI
   - Testar integração

3. Extras (se der tempo):
   - Melhorar error handling
   - Adicionar loading states
   - Estilizar componentes
   - Implementar Redux

## Lembre-se! 🎯

- Foque no básico funcionando primeiro
- Comente seu código enquanto desenvolve
- Peça clarificação se precisar
- Não se preocupe em fazer algo complexo
- Mantenha a calma, você consegue! 💜