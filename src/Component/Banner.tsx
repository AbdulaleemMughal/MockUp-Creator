import bannerImage from '../assets/banner.jpg';
import '../App.css';
import { MockUp } from './MockUp';
export const Banner = () => {
    return(
        <>
            <div className="flex gap-4 max-lg:flex-col">
                <div className="flex-1 flex justify-center items-center max-lg:py-20">
                    <div>
                        <h1 className='relative z-10 text-4xl lg:text-7xl font-bold lg:leading-normal text-center lg:text-left neon-glow bg-gradient-to-br from-cyan-300 to-purple-400 text-transparent bg-clip-text'>Mockup Creator</h1>
                        <p className='text-white text-xl mt-2 mb-4 leading-normal text-center lg:text-left'>Create stunning mockups effortlessly—social posts, videos, <br /> and more, in minutes.</p>
                        <div className='flex items-center justify-start gap-6 max-lg:justify-center'>
                        <a href='#allMockup'><button className='b-button'>All Mockups</button></a>
                        <button className='p-button'>Browser Mockups</button>
                        </div>
                        
                    </div>
                </div>
                <div className="flex-1">
                    <img src={bannerImage} className='h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]' />
                </div>
            </div>
            <MockUp />
        </>
    );
};