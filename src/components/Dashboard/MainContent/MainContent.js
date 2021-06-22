import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ProductAdd from './ProductAdd';
import ProductEdit from './ProductEdit';
import ProductManage from './ProductManage';
import Profile from './Profile';

const MainContent = ({match}) => {
    
    return (
        <div className="admin__content">
                <Switch>
                    <Route exact path={`${match.path}/`}>
                        <Profile />
                    </Route>
                    <Route path={`${match.path}/profile`}>
                        <Profile />
                    </Route>
                    <Route path={`${match.path}/orders`}>
                        <ProductManage />
                    </Route>
                    <Route path={`${match.path}/review`}>
                        <ProductManage />
                    </Route>
                    <Route path={`${match.path}/orderList`}>
                        <ProductManage />
                    </Route>
                    <Route path={`${match.path}/addService`}>
                        <ProductAdd />
                    </Route>
                    <Route path={`${match.path}/addAdmin`}>
                        <ProductEdit />
                    </Route>
                    <Route path={`${match.path}/manageService`}>
                        <ProductEdit />
                    </Route>
                </Switch>
            </div>
    );
};

export default MainContent;