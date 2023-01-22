import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NewsItemLarge from '../../components/NewsItemLarge';

import * as newsApi from '../../services/newsApi';

export default function ActivePage() {


    const location = useLocation();



    return (
        <div>
            <NewsItemLarge />
        </div>
    );
}
