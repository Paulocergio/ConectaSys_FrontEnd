/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const containerClassName = classNames(
        'surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden',
        { 'p-input-filled': layoutConfig.inputStyle === 'filled' }
    );

    return (
        <div className={containerClassName} style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="wave-background"></div>
            <div className="flex flex-column align-items-center justify-content-center" style={{ position: 'relative', zIndex: 1 }}>
                <img
                    src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`}
                    alt="Sakai logo"
                    className="mb-5 w-8rem flex-shrink-0"
                />
                <div className="animated-border-card"
                    style={{
                        borderRadius: '20px',
                        padding: '0.5rem',
                        background: '#ffffff',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div
                        className="w-full surface-card py-8 px-5 sm:px-8"
                        style={{
                            borderRadius: '15px',
                            background: '#ffffff',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        <div className="text-center mb-5">
                            <div className="text-900 text-4xl font-bold mb-3">Welcome Back</div>
                            <div className="text-600 text-lg">Please login to your account</div>
                        </div>
    
                        <div>
                            <label htmlFor="email1" className="block text-900 text-lg font-medium mb-2">
                                Email
                            </label>
                            <InputText
                                id="email1"
                                type="text"
                                placeholder="Email address"
                                className="w-full md:w-30rem mb-5"
                                style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #E0E0E0' }}
                            />
    
                            <label htmlFor="password1" className="block text-900 font-medium text-lg mb-2">
                                Password
                            </label>
                            <Password
                                inputId="password1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                toggleMask
                                feedback={true}
                                className="w-full mb-5"
                                inputClassName="w-full p-3 md:w-30rem"
                                style={{ borderRadius: '8px', border: '1px solid #E0E0E0' }}
                            />
    
                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <div className="flex align-items-center">
                                    <Checkbox
                                        inputId="rememberme1"
                                        checked={checked}
                                        onChange={(e) => setChecked(e.checked ?? false)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="rememberme1" className="text-700">Remember me</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer"
                                   style={{ color: '#1E88E5', fontSize: '14px' }}>
                                    Forgot password?
                                </a>
                            </div>
                            <Button
                                label="Sign In"
                                className="w-full p-3 text-lg"
                                style={{
                                    background: 'linear-gradient(135deg, #42A5F5, #1E88E5)',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 10px rgba(33, 150, 243, 0.3)',
                                }}
                                onClick={() => router.push('/')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .wave-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(120deg, #89f7fe, #66a6ff, #9572f5);
                    background-size: 200% 200%;
                    animation: waveAnimation 6s infinite;
                    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
                    z-index: 0;
                }
    
                .animated-border-card span:nth-child(1) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(to right, transparent, #1779ff);
                    animation: animate1 2s linear infinite;
                }
    
                @keyframes animate1 {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
    
                .animated-border-card span:nth-child(2) {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 3px;
                    height: 100%;
                    background: linear-gradient(to bottom, transparent, #1779ff);
                    animation: animate2 2s linear infinite;
                    animation-delay: 1s;
                }
    
                @keyframes animate2 {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(100%);
                    }
                }
    
                .animated-border-card span:nth-child(3) {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(to left, transparent, #1779ff);
                    animation: animate3 2s linear infinite;
                }
    
                @keyframes animate3 {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
    
                .animated-border-card span:nth-child(4) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 3px;
                    height: 100%;
                    background: linear-gradient(to top, transparent, #1779ff);
                    animation: animate4 2s linear infinite;
                    animation-delay: 1s;
                }
    
                @keyframes animate4 {
                    0% {
                        transform: translateY(100%);
                    }
                    100% {
                        transform: translateY(-100%);
                    }
                }
    
                @keyframes waveAnimation {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </div>
    );
};

export default LoginPage;
