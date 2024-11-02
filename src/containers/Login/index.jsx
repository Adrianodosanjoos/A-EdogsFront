import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';


import Logo from '../../assets/logo.svg';
import {Button} from '../../components/Button';
import {  useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import { 
    Container, 
    InputContainner, 
    LeftContainner, 
    RightContainer, 
    Title,  
    Form,
    Link 
} from "./styles";

export function Login() {
    const navigate = useNavigate();
    const { putUserDate } =  useUser();

    const schema = yup 
    .object({
        email: yup.string().email('Digite um e-mail válido')
        .required('E-mail é obrigatório'),
        password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('Digite uma senha'),
    })
    .required();
       
     const {
        register,
        handleSubmit,
        formState: {errors},
     } = useForm({
        resolver: yupResolver(schema)
     });
       
     console.log (errors)

         const onSubmit = async (data) => {
           const { data: userData } = await toast.promise(
            api.post('/session', {
            email: data.email,
            password: data.password,
            }),

            

            {
                pending: 'Verificando seus dados⌛',
                success:{
                    render(){
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                        return 'Seja bem vindo(a)😁';
                    },
                },
                    
                error:'Email ou senha Incorreto 🥺',
              }, 
    
        );
           
        putUserDate( userData);
        //localStorage.setItem('token', token);
         };

    return (
        <Container>
            <LeftContainner>
                <img src={Logo} alt="Logo-aedogs" />
            </LeftContainner>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>A&E Dogs!</span>
                    <br />
                    Acesse com seu<span> Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainner>
                        <label>Email</label>
                        <input type="email" {...register("email")}/>
                        <p>{errors?.email?.message}</p>
                    </InputContainner>

                    <InputContainner>
                        <label>Senha</label>
                        <input type="password"  {...register("password")}/>
                        <p>{errors?.password?.message}</p>
                    </InputContainner>
                    <Button type="Submit">Entrar</Button>
                </Form>
               <p>Não possui conta? <Link to="/cadastro"> Clique aqui.</Link>
               </p>
            </RightContainer>
        </Container>
    );
}