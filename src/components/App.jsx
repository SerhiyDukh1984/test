import { Form } from './Form/Form';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { WorkingList } from './WorkingList/WorkingList';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <WorkingList />
      <Form />
    </>
  );
};
