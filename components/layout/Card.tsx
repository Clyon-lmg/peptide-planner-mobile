import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
}

export default function Card({ children, style }: Props) {
    return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 12,
        padding: 16,
        backgroundColor: '#fff'
    }
});