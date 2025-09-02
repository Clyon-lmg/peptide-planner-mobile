import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppShell from './components/layout/AppShell';
import Today from './screens/Today';
import Calendar from './screens/Calendar';
import Inventory from './screens/Inventory';
import Protocol from './screens/Protocol';
import Cart from './screens/Cart';
import Orders from './screens/Orders';

const Drawer = createDrawerNavigator();

function wrap(title: string, Component: React.ComponentType) {
    return () => (
        <AppShell title={title}>
            <Component />
        </AppShell>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Today" screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Today" component={wrap('Today', Today)} />
                <Drawer.Screen name="Calendar" component={wrap('Calendar', Calendar)} />
                <Drawer.Screen name="Inventory" component={wrap('Inventory', Inventory)} />
                <Drawer.Screen name="Protocol" component={wrap('Protocol', Protocol)} />
                <Drawer.Screen name="Cart" component={wrap('Cart', Cart)} />
                <Drawer.Screen name="Orders" component={wrap('Orders', Orders)} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}