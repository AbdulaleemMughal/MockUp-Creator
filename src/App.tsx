import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Banner } from './Component/Banner';
import { TwitterMockup } from './Pages/Twitter/TwitterMockup';
import { YoutubeMockup } from './Pages/Youtube/YoutubeMockup';
import { YoutubeComment } from './Pages/YoutubeComment/YoutubeComment';
import { WhatsApp } from './Pages/WhatsApp/WhatsApp';
import { Instagram } from './Pages/Instagram/Instagram';
import { SpotifyPhone } from './Pages/Spotify-Phone/SpotifyPhone';
import { SpotifyDesktop } from './Pages/Spotify-Desktop/SpotifyDesktop';
import { Tiktok } from './Pages/Tiktok/Tiktok';
import { Edit } from './Pages/Edit-Image/Edit';
import { EditLaptop } from './Pages/Edit-Laptop/EditLaptop';
import { Edit as Desktop } from "./Pages/Edit-Desktop/Edit"
import { Phone } from './Pages/Phone-call/Phone';
import { PhoneLockScreen } from './Pages/PhoneLockscreen/PhoneLockScreen';
import { Twitch } from './Pages/Twitch/Twitch';
import { Practise } from './Component/Practise';

function App() {

  const appRoute = createBrowserRouter([
    {
      path: '/',
      element: <Banner />
    },
    {
      path: '/twitter',
      element: <TwitterMockup />
    },
    {
      path: '/youtube',
      element: <YoutubeMockup />
    },
    {
      path: '/youtube-comment',
      element: <YoutubeComment />
    },
    {
      path: '/whatsapp',
      element: <WhatsApp />
    },
    {
      path: '/instagram',
      element: <Instagram />
    },
    {
      path: '/spotify-phone',
      element: <SpotifyPhone />
    },
    {
      path: '/spotify-desktop',
      element: <SpotifyDesktop />
    },
    {
      path: '/tiktok',
      element: <Tiktok />
    },
    {
      path: '/edit-image',
      element: <Edit />
    },
    {
      path: '/edit-laptop',
      element: <EditLaptop />
    },
    {
      path: '/edit-desktop',
      element: <Desktop />
    },
    {
      path: '/phone-call',
      element: <Phone />
    },
    {
      path: '/phone-lockScreen',
      element: <PhoneLockScreen />
    },
    {
      path: '/twitch',
      element: <Twitch />
    },
    {
      path: '/practise',
      element: <Practise />
    }
  ])

  return (
    <>
        <RouterProvider router={appRoute} />
    </>
  )
}

export default App
