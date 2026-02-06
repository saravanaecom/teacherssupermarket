import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import { School, Agriculture, Favorite, Phone, Email } from '@mui/icons-material';

const AboutTSM = () => {
    return (
        <Box sx={{ background: '#FFFFFF', py: { xs: 6, md: 10 } }}>
            <Container maxWidth="xl">
                {/* Hero Section */}
                <Box sx={{ 
                    textAlign: 'center', 
                    mb: 6,
                    p: { xs: 3, md: 5 },
                    background: 'linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
                    borderRadius: '16px',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '16px',
                        zIndex: 0
                    }
                }}>
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="h3" sx={{ 
                            fontWeight: 700, 
                            color: '#1a1a2e',
                            fontSize: { xs: '24px', sm: '32px', md: '40px' },
                            mb: 2
                        }}>
                            என் மதிப்புக்கும் & மரியாதைக்குரிய!!!
                        </Typography>
                        <Typography variant="h5" sx={{ 
                            fontWeight: 600, 
                            color: '#FF9933',
                            fontSize: { xs: '18px', sm: '22px', md: '26px' },
                            mb: 1
                        }}>
                            ஆசிரியர்கள் & விவசாய பெருமக்கள் அனைவருக்கும் வணக்கம்
                        </Typography>
                        <Typography variant="h6" sx={{ 
                            color: '#4a4a4a',
                            fontSize: { xs: '14px', sm: '16px' },
                            mt: 2,
                            fontStyle: 'italic'
                        }}>
                            Greetings to all respected Teachers & Farmers
                        </Typography>
                    </Box>
                </Box>

                {/* Mission Statement */}
                <Card sx={{ 
                    mb: 4, 
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '3px solid #FF9933'
                }}>
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography sx={{ 
                            fontSize: { xs: '15px', sm: '17px', md: '18px' },
                            lineHeight: 1.8,
                            color: '#1a1a2e',
                            textAlign: 'justify',
                            mb: 2
                        }}>
                            <strong style={{ color: '#FF9933' }}>அனைவரும் முக்கியமானவர்கள் & மதிக்கப்படவேண்டியவர்கள்</strong> என்கின்ற குறிக்கோளுடன் நான் துவங்கி இருக்கும் இந்த சூப்பர் மார்க்கெட் உங்களுக்கானது.
                        </Typography>
                        <Typography sx={{ 
                            fontSize: { xs: '13px', sm: '14px' },
                            color: '#4a4a4a',
                            fontStyle: 'italic'
                        }}>
                            Everyone is important & deserves respect - This supermarket is for you.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Main Content */}
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Card sx={{ 
                            borderRadius: '12px',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                            background: 'linear-gradient(180deg, #FFF5EB 0%, #FFFFFF 100%)'
                        }}>
                            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography sx={{ 
                                    fontSize: { xs: '15px', sm: '16px', md: '17px' },
                                    lineHeight: 1.9,
                                    color: '#1a1a2e',
                                    textAlign: 'justify',
                                    mb: 3
                                }}>
                                    பணம் சம்பாரிக்க வேண்டும் & என் குடும்பம் மட்டும் நலனுடன் இருக்க வேண்டும் என்கிற மனிதர்கள் நடுவே, எனக்கு <strong style={{ color: '#FF9933' }}>கல்வி என்கிற தன்னபிக்கை & அறிவு என்கிற ஆயுதம்</strong>, <strong style={{ color: '#138808' }}>ஆரோக்கியம் என்கிற செல்வம்</strong>, நன்றி மறக்க கூடாது என்கிற கடமையும் கற்று தந்த ஆசிரியர்களுக்கும், நானும் என் மக்களும் வாழ உழைக்கும் விவசாய பெருமக்களுக்கும் என்னுடைய நன்றிகளை வார்த்தையால் தெரிவிக்காமல் என்னால் முயன்ற அளவுக்கு அவர்களுக்கு குறைந்த விலையில் மளிகை பொருட்கள் & அவர்கள் இருப்பிடத்திற்க்கே சென்று கொடுக்கும் முயற்சியில் இந்த சூப்பர் மார்க்கெட் துவங்கியுள்ளேன்.
                                </Typography>
                                <Divider sx={{ my: 3, borderColor: '#FF9933' }} />
                                <Typography sx={{ 
                                    fontSize: { xs: '15px', sm: '16px', md: '17px' },
                                    lineHeight: 1.9,
                                    color: '#1a1a2e',
                                    textAlign: 'justify'
                                }}>
                                    உங்கள் அனைவருக்கும் அனைத்தும் இலவசமாகவே கொடுக்கலாம் அப்போது கூட நீங்கள் கொடுத்ததுற்க்கு ஈடு ஆகாது ஆனால் தற்போது என்னிடம் அந்த அளவுக்கு இறுப்பு இல்லை. கண்டிப்பாக வருங்காலங்களில் ஆண்டவன் அருளிலும், உங்கள் ஆசிர்வாதமும், இந்த முயற்சிக்கான அரவணைப்பும் மற்றும் ஆதரவும் நன் முறையில் வளர வெறும் சொல்லில் இல்லாமல் செயலில் செய்து காட்டுவேன் என்று உங்களுக்கு வாக்கு கொடுக்குறேன்.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* TSM Name Explanation */}
                <Box sx={{ 
                    mt: 5, 
                    p: { xs: 3, md: 5 },
                    background: 'linear-gradient(135deg, #138808 0%, #0F6B06 100%)',
                    borderRadius: '16px',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(19, 136, 8, 0.3)'
                }}>
                    <Typography variant="h4" sx={{ 
                        fontWeight: 700, 
                        color: '#FFFFFF',
                        fontSize: { xs: '22px', sm: '28px', md: '36px' },
                        mb: 2
                    }}>
                        TSM – Teacher's Super Market
                    </Typography>
                    <Typography variant="h5" sx={{ 
                        fontWeight: 600, 
                        color: '#FFF5EB',
                        fontSize: { xs: '18px', sm: '22px', md: '26px' }
                    }}>
                        ஆசிரியர்கள் சூப்பர் மார்க்கெட்
                    </Typography>
                    <Typography sx={{ 
                        fontSize: { xs: '14px', sm: '16px' },
                        color: '#E8F5E9',
                        mt: 3,
                        lineHeight: 1.8
                    }}>
                        என் எண்ணத்தில் எந்த சுயநலமும் இல்லை என்பதற்கு இந்த பெயர் பலகையே உங்கள் முன் சமர்ப்பிக்கின்றேன்
                    </Typography>
                </Box>

                {/* Target Audience Cards */}
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ 
                            height: '100%',
                            borderRadius: '12px',
                            boxShadow: '0 4px 16px rgba(255, 153, 51, 0.2)',
                            border: '3px solid #FF9933',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-8px)'
                            }
                        }}>
                            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <School sx={{ fontSize: 48, color: '#FF9933', mr: 2 }} />
                                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#FF9933' }}>
                                        நமது பார்வை: ஆசிரியர்கள்
                                    </Typography>
                                </Box>
                                <Typography sx={{ 
                                    fontSize: { xs: '14px', sm: '15px' },
                                    lineHeight: 1.8,
                                    color: '#1a1a2e',
                                    mb: 2
                                }}>
                                    <strong>அனைவரும் சமமே & அனைவருக்கும் பாராபச்சமின்றி உரிய சலுகை கொடுக்கப்படும்</strong>
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, color: '#4a4a4a', fontSize: { xs: '13px', sm: '14px' } }}>
                                    <li>நிரந்தர பணியாளர் ஆசிரியர் ஆனாலும் சரி</li>
                                    <li>தற்காலிக பணியாளர் ஆசிரியர் ஆனாலும் சரி</li>
                                    <li>பயிற்சி ஆசிரியர் ஆனாலும் சரி</li>
                                    <li>அதிக சம்பளம் வாங்கும் ஆசிரியர் ஆனாலும் சரி</li>
                                    <li>குறைவு சம்பளம் வாங்கும் ஆசிரியர் ஆனாலும் சரி</li>
                                    <li>சம்பளம் வாங்காமலே பணிசெயும் ஆசிரியர் ஆனாலும் சரி</li>
                                </Box>
                                <Typography sx={{ 
                                    fontSize: { xs: '14px', sm: '15px' },
                                    lineHeight: 1.8,
                                    color: '#1a1a2e',
                                    mt: 2,
                                    fontWeight: 600
                                }}>
                                    கல்வி என்னும் அமிர்தம் கொடுக்கும் ஆசிரியர் & அவர்களை நமக்கு வரமாய் கொடுத்த அவர்கள் குடும்பம் வறுமையின் பிடியிலும் & பசியில் பிடியிலும் இருக்க கூடாது என்பதே நமது பார்வை
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ 
                            height: '100%',
                            borderRadius: '12px',
                            boxShadow: '0 4px 16px rgba(19, 136, 8, 0.2)',
                            border: '3px solid #138808',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-8px)'
                            }
                        }}>
                            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <Agriculture sx={{ fontSize: 48, color: '#138808', mr: 2 }} />
                                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#138808' }}>
                                        நமது பார்வை: விவசாய பெருமக்கள்
                                    </Typography>
                                </Box>
                                <Box component="ul" sx={{ pl: 2, color: '#4a4a4a', fontSize: { xs: '13px', sm: '14px' }, mb: 2 }}>
                                    <li>உலகத்தின் செழுமை பாதுகாப்பவர்கள்</li>
                                    <li>உலகத்தின் முதன்மை பொறுப்பாளர்கள்</li>
                                    <li>எல்லாரும் நலத்துடன் வாழவைப்பவர்கள்</li>
                                    <li>தானும் & தன் குடும்பமும் வறுமையில் / கஷ்டத்தில் / நஷ்டத்தில் வாழும் நிலை இருந்தாலும் தன்னலம் இல்லா நல்லவர்கள்</li>
                                    <li>மேன்மை வழக்கை ஆசை இல்லை / அதிக ஈர்ப்பு இல்லை</li>
                                </Box>
                                <Typography sx={{ 
                                    fontSize: { xs: '14px', sm: '15px' },
                                    lineHeight: 1.8,
                                    color: '#1a1a2e',
                                    fontWeight: 600
                                }}>
                                    அனைவருக்கும் உணவு கொடுக்கும் ஆகச்சிறந்த மெய்க்காப்பளர்கள் அதனால்தான் அவர்களுக்கும் & அவர்கள் குடும்பத்தாருக்கும் நம்மால் முடிந்த அளவுக்கு உணவு பொருட்கள் & இதர பொருட்கள் பாரபட்ச்சமின்றி குறைந்த விலையில் கிடைக்க வேண்டும்
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Philosophy Section */}
                <Card sx={{ 
                    mt: 5,
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    background: 'linear-gradient(180deg, #E8F5E9 0%, #FFFFFF 100%)'
                }}>
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography variant="h5" sx={{ 
                            fontWeight: 700, 
                            color: '#1a1a2e',
                            mb: 3,
                            textAlign: 'center'
                        }}>
                            மாத / பிதா / குரு / தெய்வம்
                        </Typography>
                        <Typography sx={{ 
                            fontSize: { xs: '15px', sm: '16px', md: '17px' },
                            lineHeight: 1.9,
                            color: '#1a1a2e',
                            textAlign: 'justify',
                            mb: 2
                        }}>
                            <strong style={{ color: '#FF9933' }}>தெய்வத்திற்க்கு முன்பே குருமார்கள் (ஆசிரியர்கள்)</strong>
                        </Typography>
                        <Typography sx={{ 
                            fontSize: { xs: '14px', sm: '15px', md: '16px' },
                            lineHeight: 1.9,
                            color: '#1a1a2e',
                            textAlign: 'justify'
                        }}>
                            தனி மனிதன் நல்லளொழுக்கும் புதிய தலைமுறைகளை நன்முறையில் வழிடத்தும், தன்னை தானே திருத்தி கொண்டால் மட்டுமே மாற்றம் கிடைக்கும். ஆகையால் நான் எடுத்திருக்கும் இந்த முயற்சி அடுத்த தலைமுறைகள் சுயநலம் இன்றி, லாபம் & பணம் மற்றுமே வாழ்க்கைக்கு முக்கியமின்றி தன்னலத்துடன் மக்கள் நலுனும் முக்கியம் என்ற என்னம் உருவாகி கலப்படம் இல்லா உணவு பொருட்கள் கொடுக்கவும் வழி செய்யும் & கலப்படம் செய்யும் மனிதர்கள் குறையவும் வழி செய்யும்.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Contact Cards */}
                <Typography variant="h4" sx={{ 
                    fontWeight: 700, 
                    color: '#1a1a2e',
                    textAlign: 'center',
                    mt: 6,
                    mb: 4
                }}>
                    முக்கிய இரண்டு குறிப்புகள்
                </Typography>
                <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px' },
                    color: '#4a4a4a',
                    textAlign: 'center',
                    mb: 4,
                    fontStyle: 'italic'
                }}>
                    (கஷ்டப்படும் நிலையில் உள்ள அனைவருக்கும் இதை தெரிவியுங்கள்)
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ 
                            height: '100%',
                            borderRadius: '12px',
                            boxShadow: '0 6px 20px rgba(255, 153, 51, 0.25)',
                            border: '3px solid #FF9933',
                            background: 'linear-gradient(180deg, #FFF5EB 0%, #FFFFFF 100%)'
                        }}>
                            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography variant="h6" sx={{ 
                                    fontWeight: 700, 
                                    color: '#FF9933',
                                    mb: 3
                                }}>
                                    விவசாய பெருமக்களுக்கு
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, color: '#1a1a2e', fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1.8 }}>
                                    <li>விவசாய பெருமக்களுக்கு வேலை அளிக்கப்படும் அவரகள் வாழும் இடத்திலேயே - TSM</li>
                                    <li>விவசாயம் செய்ய விருப்பம் உள்ளவர்கள் எங்களுடன் சேர்ந்து வேலை செய்யலாம்</li>
                                    <li>என்னிடம் நிலம் உண்டு ஆனால் செலவீனம் இருப்பு இல்லை பரவாயில்லை நாங்கள் துணை நிற்கின்றோம் சேர்ந்து விவசாயம் செய்யலாம்</li>
                                    <li>விவசாயக்கடன் உள்ளது பரவாயில்லை சேர்ந்து வேலை செய்து கடனை அடைக்கலாம் தவறான முடிவுகள் எடுக்க வேண்டாம் நாங்கள் துணை நிற்கின்றோம்</li>
                                </Box>
                                <Box sx={{ mt: 3, p: 2, background: '#FFFFFF', borderRadius: '8px', border: '2px solid #FF9933' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Phone sx={{ color: '#FF9933', mr: 1 }} />
                                        <Typography sx={{ fontWeight: 600, color: '#1a1a2e' }}>8667522314</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Email sx={{ color: '#FF9933', mr: 1 }} />
                                        <Typography sx={{ fontWeight: 600, color: '#1a1a2e', fontSize: { xs: '12px', sm: '14px' } }}>
                                            teacherssupermarket@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ 
                            height: '100%',
                            borderRadius: '12px',
                            boxShadow: '0 6px 20px rgba(19, 136, 8, 0.25)',
                            border: '3px solid #138808',
                            background: 'linear-gradient(180deg, #E8F5E9 0%, #FFFFFF 100%)'
                        }}>
                            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography variant="h6" sx={{ 
                                    fontWeight: 700, 
                                    color: '#138808',
                                    mb: 3
                                }}>
                                    தகுதிக்கேற்ப வேலை: அனைவருக்கும் வேலை அளிக்கப்படும் - TSM
                                </Typography>
                                <Typography sx={{ 
                                    fontSize: { xs: '14px', sm: '15px' },
                                    lineHeight: 1.8,
                                    color: '#1a1a2e',
                                    mb: 2
                                }}>
                                    எங்களிடம் சேர இந்த தகுதி இருந்தாலே போதும் நீங்கள் யார இருந்தாலும் பரவாயில்லை எப்படி இருந்தாலும் பரவாயில்லை
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, color: '#1a1a2e', fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1.8 }}>
                                    <li>பதவி ஆசை இருக்க கூடாது</li>
                                    <li>பணம் ஆசை இருக்க கூடாது</li>
                                    <li>பொருள் ஆசை இருக்க கூடாது</li>
                                </Box>
                                <Typography sx={{ 
                                    fontSize: { xs: '14px', sm: '15px' },
                                    lineHeight: 1.8,
                                    color: '#1a1a2e',
                                    mt: 2,
                                    fontWeight: 600
                                }}>
                                    உங்கள் தேவைகள் நாங்கள் உதவுகிறோம் உங்கள் வாழ்க்கை மேன்பட துணை நிற்கின்றோம்
                                </Typography>
                                <Box sx={{ mt: 3, p: 2, background: '#FFFFFF', borderRadius: '8px', border: '2px solid #138808' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Phone sx={{ color: '#138808', mr: 1 }} />
                                        <Typography sx={{ fontWeight: 600, color: '#1a1a2e' }}>8667522314</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Email sx={{ color: '#138808', mr: 1 }} />
                                        <Typography sx={{ fontWeight: 600, color: '#1a1a2e', fontSize: { xs: '12px', sm: '14px' } }}>
                                            teacherssupermarket@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Closing Message */}
                <Box sx={{ 
                    mt: 6, 
                    p: { xs: 3, md: 5 },
                    background: 'linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
                    borderRadius: '16px',
                    textAlign: 'center',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255, 255, 255, 0.92)',
                        borderRadius: '16px',
                        zIndex: 0
                    }
                }}>
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Favorite sx={{ fontSize: 48, color: '#FF9933', mb: 2 }} />
                        <Typography variant="h4" sx={{ 
                            fontWeight: 700, 
                            color: '#1a1a2e',
                            fontSize: { xs: '20px', sm: '26px', md: '32px' },
                            mb: 2
                        }}>
                            அனைவரும் முக்கியமானவர்கள் & மதிக்கப்படவேண்டியவர்கள்
                        </Typography>
                        <Typography variant="h5" sx={{ 
                            fontWeight: 600, 
                            color: '#138808',
                            fontSize: { xs: '16px', sm: '20px', md: '24px' }
                        }}>
                            அனைவரும் நலமுடன் வாழ உங்கள் அபிமானி - TSM சேவகர்கள்
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutTSM;
