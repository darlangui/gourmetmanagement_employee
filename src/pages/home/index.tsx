import React, { useState, useEffect } from 'react';

import * as style from './style';

const HomePage: React.FC = () => {
    const [pageStatus, setPageStatus] = useState<
        'loading' | 'error' | 'success' | 'noResult'
    >('loading');

    const callApi = async () => {
        try {
            setPageStatus('loading');
        } catch (error){
            setPageStatus('error');
        } finally {
            setPageStatus('success');
        }
    }

    return (
        <style.Container>
            <style.Header>
                <h1>test</h1>
            </style.Header>
        </style.Container>
    );
};

export default HomePage;