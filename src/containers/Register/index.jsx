import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';




import Logo from '../../assets/imgdogs.svg'
import { Button } from '../../components/Button'
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


export function Register() {
const navigate = useNavigate(); 
    const schema = yup
        .object({
            name: yup.string().required('O nome é Obrigatório'),
            email: yup.string().email('Digite um e-mail válido')
                .required('E-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
                .required('Digite uma senha'),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
                .required('Confirme sua senha'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    console.log(errors)

    const onSubmit = async (data) => {
        try {
       
        const { status } = await
            api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,

            },
            {
                validateStatus: () => true,
            },
        );


         if (status === 200 || status === 201 ) {
            setTimeout (() => {
               navigate('/login');
            }, 2000);
            toast.success('Conta criada com sucesso 😁!');
         } else if (status === 404 || status === 409) {
            toast.error('E-mail já cadastrado');
         } else {
              throw new Error();
         }
       
        } catch (error) {
          toast.error ("🥺 Falha no Sistema! Tente novamente");  
        }
    };

    return (
        <Container>
            <LeftContainner>
                <img src={Logo} alt="Logo-aedogs" />
            </LeftContainner>
            <RightContainer>
                <Title>
                    Criar conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainner>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainner>

                    <InputContainner>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainner>

                    <InputContainner>
                        <label>Senha</label>
                        <input type="password"  {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainner>

                    <InputContainner>
                        <label>Confirma Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainner>
                    <Button type="Submit">Criar Conta</Button>
                </Form>
                <p>Já possui conta ? <Link to="/login"> Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    );
}