import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { HomePageLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <HomePageLink to="/">Home</HomePageLink>
      {isLoggedIn && <NavLink to="/contacts">Tasks</NavLink>}
    </nav>
  );
};

// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav>
//       <NavLink className={css.link} to="/">
//         Home
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink className={css.link} to="/tasks">
//           Tasks
//         </NavLink>
//       )}
//     </nav>
//   );
// };
