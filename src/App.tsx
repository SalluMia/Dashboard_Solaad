import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import Events from './pages/Events';
import Holidays from './components/Holidays';
import EventsForm from './pages/Form/EventsForm';
import Services from './components/Services';
import ServicesForm from './pages/Form/ServicesForm';
import Strategies from './components/Strategies';
import StrategiesForm from './pages/Form/StrategiesForm';
import Projects from './components/Projects';
import PortfolioForm from './pages/Form/PortfolioForm';

const Calendar = lazy(() => import('./pages/Calendar'));
const Chart = lazy(() => import('./pages/Chart'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Tables = lazy(() => import('./pages/Tables'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route
            path="/Holidays&Events"
            element={
              <Suspense fallback={<Loader />}>
                <Events />
              </Suspense>
            }
          />

          <Route
            path="/events"
            element={
              <Suspense fallback={<Loader />}>
                <EventsForm />
              </Suspense>
            }
          />

          <Route
            path="/Services"
            element={
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            }
          />

          <Route
            path="/servicesform"
            element={
              <Suspense fallback={<Loader />}>
                <ServicesForm />
              </Suspense>
            }
          />

          <Route
            path="/strategies"
            element={
              <Suspense fallback={<Loader />}>
                <Strategies />
              </Suspense>
            }
          />

          <Route
            path="/strategiesform"
            element={
              <Suspense fallback={<Loader />}>
                <StrategiesForm />
              </Suspense>
            }
          />

          <Route
            path="/portfolio"
            element={
              <Suspense fallback={<Loader />}>
                <Projects />
              </Suspense>
            }
          />
           <Route
            path="/projectsform"
            element={
              <Suspense fallback={<Loader />}>
                <PortfolioForm />
              </Suspense>
            }
          />






    {/*========================== Prev Routes =============== */}
          <Route index element={<ECommerce />} />
          <Route
            path="/calendar"
            element={
              <Suspense fallback={<Loader />}>
                <Calendar />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <Suspense fallback={<Loader />}>
                <FormElements />
              </Suspense>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <Suspense fallback={<Loader />}>
                <FormLayout />
              </Suspense>
            }
          />
          <Route
            path="/tables"
            element={
              <Suspense fallback={<Loader />}>
                <Tables />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />
          <Route
            path="/chart"
            element={
              <Suspense fallback={<Loader />}>
                <Chart />
              </Suspense>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <Suspense fallback={<Loader />}>
                <Alerts />
              </Suspense>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <Suspense fallback={<Loader />}>
                <Buttons />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
