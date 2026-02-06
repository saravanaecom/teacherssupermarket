import BannerSlider from "../components/slider/BannerSlider";
import ImageCategorySlider from "../components/slider/ImageCategorySlider";
import OfferFastMovingProduct from "../components/slider/offerFastMovingProduct";
import ProductByIndexPage from '../components/slider/productByIndexPage';
import TamilContentSection from '../components/TamilContentSection';
import PromoBanner from '../components/PromoBanner';
import AboutTSM from '../components/AboutTSM';
import { Container } from '@mui/material';

export default function HomePage() {
    return (
        <>
            <PromoBanner />
            <Container maxWidth="xl">
                <BannerSlider />  
                
                <OfferFastMovingProduct/>         
                <AboutTSM />     
                <ImageCategorySlider />
                <ProductByIndexPage/>
                <TamilContentSection />
            </Container>
           
            
        </>
    )
};