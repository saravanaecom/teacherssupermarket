import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { Instagram, Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import AppLogo from '../logo/AppLogo';
import PlayStrore from '../../assets/play-store.svg';
import AppStrore from '../../assets/app-store.svg';
import { ServerURL } from '../../server/serverUrl';

const AppFooter = ({ CompanyDetails }) => {
    return (
        <>
            <Box sx={{ 
                background: 'linear-gradient(135deg, #138808 0%, #0F6B06 100%)', 
                padding: '50px 20px',
                borderTop: '4px solid #FF9933'
            }}>
                <Container maxWidth="xl" sx={{ px: { xs: 0, md: 3 } }}>
                    <Grid container justifyContent="space-between" alignItems="flex-start">
                        {/* Left section */}
                        <Grid item xs={12} sm={12} md={3}>
                            <Box display="flex" flexDirection="column" alignItems="flex-start">
                                <Box sx={{ background: '#FFFFFF', borderRadius: 2, p: 1 }}>
                                    <AppLogo />
                                </Box>
                                <Box display="flex" gap={2} sx={{ py: 3 }}>
                                    <Link href="#">
                                        <Instagram sx={{ color: '#FFFFFF', '&:hover': { color: '#FFB366' } }}/>
                                    </Link>
                                    <Link href="#">
                                        <Twitter sx={{ color: '#FFFFFF', '&:hover': { color: '#FFB366' } }}/>
                                    </Link>
                                    <Link href="#">
                                        <Facebook sx={{ color: '#FFFFFF', '&:hover': { color: '#FFB366' } }} />
                                    </Link>
                                    <Link href="#">
                                        <LinkedIn sx={{ color: '#FFFFFF', '&:hover': { color: '#FFB366' } }}/>
                                    </Link>
                                </Box>
                                <Typography variant="caption" sx={{ mt: 1, color: '#E8F5E9' }}>
                                    © Kassapos software solutions Pvt Ltd
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Middle section */}
                        <Grid item xs={12} sm={12} md={3}>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography sx={{ color: '#FFFFFF', borderBottom: '3px solid #FF9933', display: 'inline', pb: 0.5 }} fontWeight={600} variant={'h5'}>Links</Typography>
                                    <Box sx={{ width: '100%', display: 'inline-block', mt: 2 }}>
                                        <List sx={{p: 0, m: 0}}>
                                            <ListItem sx={{p: 0.3, m: 0, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}} button component={Link} to="/">
                                                <ListItemText sx={{ '& .MuiListItemText-primary': { color: '#E8F5E9' } }} primary="Home" />
                                            </ListItem>
                                            <ListItem sx={{p: 0.3, m: 0, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}} button component={Link} to="/about-us">
                                                <ListItemText sx={{ '& .MuiListItemText-primary': { color: '#E8F5E9' } }} primary="About Us" />
                                            </ListItem>
                                            <ListItem sx={{p: 0.3, m: 0, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}} button component={Link} to="/privacy-policy">
                                                <ListItemText sx={{ '& .MuiListItemText-primary': { color: '#E8F5E9' } }} primary="Privacy Policy" />
                                            </ListItem>
                                            <ListItem sx={{p: 0.3, m: 0, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}} button component={Link} to="/terms-and-conditions">
                                                <ListItemText sx={{ '& .MuiListItemText-primary': { color: '#E8F5E9' } }} primary="Terms & Conditions" />
                                            </ListItem>
                                            <ListItem sx={{p: 0.3, m: 0, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}} button component={Link} to="/refund-and-cancellation">
                                                <ListItemText sx={{ '& .MuiListItemText-primary': { color: '#E8F5E9' } }} primary="Refund & Cancellation" />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2}>
                            <Typography sx={{ color: '#FFFFFF', borderBottom: '3px solid #FF9933', display: 'inline', pb: 0.5 }} fontWeight={600} variant={'h5'}>Official info:</Typography>
                            <Box display="flex" gap={2} sx={{ mt: 2 }}>
                                <Typography component={'p'} sx={{ mt: 1, color: '#E8F5E9' }} className="text-sm sm:text-base lg:text-lg">
                                    {ServerURL.COMPANY_ADDRESS}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography component={'p'} sx={{ mt: 1, color: '#E8F5E9' }}>Mobile: {ServerURL.COMPANY_MOBILE}</Typography>
                            </Box>
                            <Box>
                                <Typography component={'p'} sx={{ mt: 1, color: '#E8F5E9' }}>Email: {ServerURL.COMPANY_EMAIL}</Typography>
                            </Box>
                        </Grid>

                        {/* Right section */}
                        <Grid item xs={12} sm={12} md={2}>
                            <Typography sx={{ color: '#FFFFFF', borderBottom: '3px solid #FF9933', display: 'inline', pb: 0.5 }} fontWeight={600} variant={'h5'}>Download App</Typography>
                            <Box sx={{ mt: 3 }}>
                                <Button 
                                    component={Link} 
                                    target='_blank' 
                                    href='https://play.google.com/store/apps/details?id=com.webpos.healthysteps' 
                                    variant="outlined" 
                                    sx={{ 
                                        mb: 1, 
                                        border: '1px solid #FF9933', 
                                        color: '#FFFFFF',
                                        '&:hover': {
                                            border: '1px solid #FFB366',
                                            backgroundColor: 'rgba(255, 153, 51, 0.15)'
                                        }
                                    }} 
                                    startIcon={<img src={PlayStrore} alt="Play Store" width="20" />}
                                >
                                    Get it on play store
                                </Button>
                                <Button 
                                    component={Link} 
                                    target='_blank' 
                                    href='https://play.google.com/store/apps/details?id=com.webpos.healthysteps' 
                                    variant="outlined" 
                                    sx={{ 
                                        mt: 2, 
                                        border: '1px solid #FF9933', 
                                        color: '#FFFFFF',
                                        '&:hover': {
                                            border: '1px solid #FFB366',
                                            backgroundColor: 'rgba(255, 153, 51, 0.15)'
                                        }
                                    }} 
                                    startIcon={<img src={AppStrore} alt="App Store" width="20" />}
                                >
                                    Get it on app store
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AppFooter;
