import { websitePageHOC } from '../../src/components/wrappers/WebsitePage/hoc';
import { LoginScreen } from '../../src/components/screens/LoginScreen';

// const Container = styled.div`
//   margin: auto;
//   background: #fff;
//   padding: 48px;
//   border-radius: 4px;
//   box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

//   h1 {
//     font-weight: 600;
//     font-size: 28px;
//     margin-top: 48px;
//     margin-bottom: 24px;
//   }

//   form {
//     display: flex;
//     flex-direction: column;

//     > div {
//       display: flex;
//       flex-direction: column;
//       gap: 16px;

//       input {
//         height: 36px;
//         width: 100%;
//         padding: 12px;
//         border: 1px solid #e6e6e6;
//         border-radius: 4px;
//         outline-color: #3f77df;
//         font-size: 16px;
//       }
//     }

//     button {
//       margin-top: 48px;
//       align-self: flex-end;
//     }
//   }
// `;

// function LoginForm() {
//   const router = useRouter();

//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log('email', email);
//     console.log('password', password);

//     fetch('http://localhost:5000/v1/account/signin', {
//       method: 'POST',
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }).then(async (res) => {
//       const response = await res.json();
//       console.log(response);

//       if (response.success === true) {
//         const decodedToken = jwt.decode(response.data.token);
//         console.log(decodedToken);

//         setCookie(null, 'token', response.data.token, {
//           path: '/',
//           maxAge: 86400 * 7,
//         });

//         if (decodedToken.role === 'admin') {
//           router.push('/app/admin/companies');
//         }
//         if (decodedToken.role === 'company') {
//           router.push('/app/company/managers');
//         }
//         if (decodedToken.role === 'manager') {
//           router.push('/app/manager/dashboard');
//         }
//         if (decodedToken.role === 'employee') {
//           router.push('/app/employee/dashboard');
//         }
//       }
//     });
//   }

//   return (
//     <Container>
//       <Logo />
//       <h1>Sign in</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <Button type="submit">Sign in</Button>
//       </form>
//     </Container>
//   );
// }

// function LoginScreen() {
//   return <LoginForm />;
// }

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    headerProps: { display: false },
    sidebarProps: { display: false },
    pageBoxProps: {
      flex: 1,
      backgroundImage: 'url(/img/background-illustration.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom left',
    },
  },
});
