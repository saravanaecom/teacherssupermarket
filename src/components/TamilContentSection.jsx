import React from 'react';
import { Container, Grid, Box, Typography, Card, CardContent } from '@mui/material';
import { Verified, LocalShipping, Security, Support } from '@mui/icons-material';

const TamilContentSection = () => {
    return (
        <>
            {/* Trust & Quality Section */}
            <Box sx={{ 
                background: 'linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #E8F5E9 100%)', 
                py: { xs: 6, md: 8 },
                mt: 4,
                borderTop: '3px solid #FF9933',
                borderBottom: '3px solid #138808'
            }}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', mb: 5 }}>
                        <Typography 
                            variant="h3" 
                            sx={{ 
                                fontWeight: 700, 
                                color: '#1a1a2e',
                                fontSize: { xs: '24px', sm: '32px', md: '36px' },
                                mb: 2,
                                position: 'relative',
                                display: 'inline-block',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #FF9933 0%, #138808 100%)',
                                    borderRadius: '2px'
                                }
                            }}
                        >
                            எங்களை ஏன் தேர்வு செய்ய வேண்டும்?
                        </Typography>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                color: '#4a4a4a',
                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                mt: 3,
                                fontWeight: 500
                            }}
                        >
                            Why Choose Us?
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ 
                                height: '100%',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 24px rgba(255, 153, 51, 0.2)',
                                    border: '2px solid #FF9933'
                                }
                            }}>
                                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                    <Box sx={{ 
                                        width: '70px', 
                                        height: '70px', 
                                        borderRadius: '50%', 
                                        background: 'linear-gradient(135deg, #FFF5EB 0%, #FFE6CC 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        border: '3px solid #FF9933'
                                    }}>
                                        <Verified sx={{ fontSize: 35, color: '#FF9933' }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a2e', mb: 1.5, fontSize: '18px' }}>
                                        தரமான பொருட்கள்
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#4a4a4a', lineHeight: 1.7, fontSize: '14px' }}>
                                        உயர்தர மற்றும் சான்றளிக்கப்பட்ட பொருட்கள் மட்டுமே வழங்கப்படுகின்றன
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#6a6a6a', mt: 1, display: 'block', fontSize: '12px' }}>
                                        Premium Quality Products
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ 
                                height: '100%',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 24px rgba(19, 136, 8, 0.2)',
                                    border: '2px solid #138808'
                                }
                            }}>
                                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                    <Box sx={{ 
                                        width: '70px', 
                                        height: '70px', 
                                        borderRadius: '50%', 
                                        background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        border: '3px solid #138808'
                                    }}>
                                        <LocalShipping sx={{ fontSize: 35, color: '#138808' }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a2e', mb: 1.5, fontSize: '18px' }}>
                                        விரைவான டெலிவரி
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#4a4a4a', lineHeight: 1.7, fontSize: '14px' }}>
                                        உங்கள் வீட்டு வாசலில் விரைவாக மற்றும் பாதுகாப்பாக டெலிவரி
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#6a6a6a', mt: 1, display: 'block', fontSize: '12px' }}>
                                        Fast & Safe Delivery
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ 
                                height: '100%',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 24px rgba(255, 153, 51, 0.2)',
                                    border: '2px solid #FF9933'
                                }
                            }}>
                                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                    <Box sx={{ 
                                        width: '70px', 
                                        height: '70px', 
                                        borderRadius: '50%', 
                                        background: 'linear-gradient(135deg, #FFF5EB 0%, #FFE6CC 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        border: '3px solid #FF9933'
                                    }}>
                                        <Security sx={{ fontSize: 35, color: '#FF9933' }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a2e', mb: 1.5, fontSize: '18px' }}>
                                        பாதுகாப்பான பணம் செலுத்துதல்
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#4a4a4a', lineHeight: 1.7, fontSize: '14px' }}>
                                        100% பாதுகாப்பான மற்றும் நம்பகமான பணம் செலுத்தும் முறைகள்
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#6a6a6a', mt: 1, display: 'block', fontSize: '12px' }}>
                                        Secure Payment Methods
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{ 
                                height: '100%',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                transition: 'all 0.3s ease',
                                border: '2px solid transparent',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 24px rgba(19, 136, 8, 0.2)',
                                    border: '2px solid #138808'
                                }
                            }}>
                                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                    <Box sx={{ 
                                        width: '70px', 
                                        height: '70px', 
                                        borderRadius: '50%', 
                                        background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        border: '3px solid #138808'
                                    }}>
                                        <Support sx={{ fontSize: 35, color: '#138808' }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a2e', mb: 1.5, fontSize: '18px' }}>
                                        24/7 வாடிக்கையாளர் ஆதரவு
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#4a4a4a', lineHeight: 1.7, fontSize: '14px' }}>
                                        எப்போதும் உங்களுக்கு உதவ தயாராக இருக்கும் எங்கள் குழு
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#6a6a6a', mt: 1, display: 'block', fontSize: '12px' }}>
                                        24/7 Customer Support
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Customer Promise Section */}
            <Box sx={{ 
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5EB 100%)', 
                py: { xs: 6, md: 8 }
            }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ 
                                background: 'linear-gradient(135deg, #FF9933 0%, #FFB366 100%)',
                                borderRadius: '16px',
                                p: { xs: 3, md: 4 },
                                boxShadow: '0 8px 24px rgba(255, 153, 51, 0.3)',
                                border: '3px solid #FFFFFF'
                            }}>
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        fontWeight: 700, 
                                        color: '#FFFFFF',
                                        fontSize: { xs: '22px', sm: '28px', md: '32px' },
                                        mb: 3
                                    }}
                                >
                                    எங்கள் வாக்குறுதி
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        color: '#FFFFFF',
                                        lineHeight: 1.8,
                                        fontSize: { xs: '14px', sm: '15px', md: '16px' },
                                        mb: 2
                                    }}
                                >
                                    நாங்கள் உங்களுக்கு சிறந்த தரமான பொருட்களை மிகவும் நியாயமான விலையில் வழங்குவதில் உறுதியாக இருக்கிறோம். உங்கள் திருப்தியே எங்கள் வெற்றி.
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: '#FFF5EB',
                                        fontStyle: 'italic',
                                        fontSize: { xs: '13px', sm: '14px' }
                                    }}
                                >
                                    We are committed to providing you with the best quality products at the most reasonable prices. Your satisfaction is our success.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ 
                                background: 'linear-gradient(135deg, #138808 0%, #0F6B06 100%)',
                                borderRadius: '16px',
                                p: { xs: 3, md: 4 },
                                boxShadow: '0 8px 24px rgba(19, 136, 8, 0.3)',
                                border: '3px solid #FFFFFF'
                            }}>
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        fontWeight: 700, 
                                        color: '#FFFFFF',
                                        fontSize: { xs: '22px', sm: '28px', md: '32px' },
                                        mb: 3
                                    }}
                                >
                                    எங்கள் பார்வை
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        color: '#FFFFFF',
                                        lineHeight: 1.8,
                                        fontSize: { xs: '14px', sm: '15px', md: '16px' },
                                        mb: 2
                                    }}
                                >
                                    ஒவ்வொரு வீட்டிலும் தரமான பொருட்களை எளிதாக கிடைக்கச் செய்வதே எங்கள் நோக்கம். நாங்கள் உங்கள் நம்பிக்கைக்குரிய கூட்டாளி.
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: '#E8F5E9',
                                        fontStyle: 'italic',
                                        fontSize: { xs: '13px', sm: '14px' }
                                    }}
                                >
                                    Our goal is to make quality products easily accessible in every home. We are your trusted partner.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Values Section */}
            <Box sx={{ 
                background: 'linear-gradient(135deg, #E8F5E9 0%, #FFFFFF 50%, #FFF5EB 100%)', 
                py: { xs: 6, md: 8 }
            }}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', mb: 5 }}>
                        <Typography 
                            variant="h3" 
                            sx={{ 
                                fontWeight: 700, 
                                color: '#1a1a2e',
                                fontSize: { xs: '24px', sm: '32px', md: '36px' },
                                mb: 2,
                                position: 'relative',
                                display: 'inline-block',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #138808 0%, #FF9933 100%)',
                                    borderRadius: '2px'
                                }
                            }}
                        >
                            எங்கள் மதிப்புகள்
                        </Typography>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                color: '#4a4a4a',
                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                mt: 3,
                                fontWeight: 500
                            }}
                        >
                            Our Core Values
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {[
                            { 
                                title: 'நேர்மை', 
                                subtitle: 'Honesty',
                                desc: 'வெளிப்படையான மற்றும் நேர்மையான வணிக நடைமுறைகள்',
                                descEn: 'Transparent and honest business practices',
                                color: '#FF9933'
                            },
                            { 
                                title: 'தரம்', 
                                subtitle: 'Quality',
                                desc: 'சிறந்த தரத்தில் எந்த சமரசமும் இல்லை',
                                descEn: 'No compromise on quality standards',
                                color: '#138808'
                            },
                            { 
                                title: 'நம்பகத்தன்மை', 
                                subtitle: 'Trust',
                                desc: 'வாடிக்கையாளர் நம்பிக்கையே எங்கள் அடித்தளம்',
                                descEn: 'Customer trust is our foundation',
                                color: '#FF9933'
                            },
                            { 
                                title: 'சேவை', 
                                subtitle: 'Service',
                                desc: 'சிறந்த வாடிக்கையாளர் சேவை எங்கள் முன்னுரிமை',
                                descEn: 'Excellent customer service is our priority',
                                color: '#138808'
                            }
                        ].map((value, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card sx={{ 
                                    height: '100%',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                    transition: 'all 0.3s ease',
                                    borderTop: `4px solid ${value.color}`,
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: `0 8px 24px ${value.color}33`
                                    }
                                }}>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography 
                                            variant="h5" 
                                            sx={{ 
                                                fontWeight: 700, 
                                                color: value.color, 
                                                mb: 0.5,
                                                fontSize: { xs: '20px', sm: '22px' }
                                            }}
                                        >
                                            {value.title}
                                        </Typography>
                                        <Typography 
                                            variant="subtitle2" 
                                            sx={{ 
                                                color: '#6a6a6a', 
                                                mb: 2,
                                                fontSize: '13px',
                                                fontWeight: 600
                                            }}
                                        >
                                            {value.subtitle}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                color: '#4a4a4a', 
                                                lineHeight: 1.7,
                                                fontSize: '14px',
                                                mb: 1
                                            }}
                                        >
                                            {value.desc}
                                        </Typography>
                                        <Typography 
                                            variant="caption" 
                                            sx={{ 
                                                color: '#6a6a6a',
                                                fontSize: '12px',
                                                fontStyle: 'italic'
                                            }}
                                        >
                                            {value.descEn}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default TamilContentSection;
