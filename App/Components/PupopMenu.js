import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';


export default class PupopMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '10%' }}>
                <Menu>
                    <MenuTrigger>
                        {this.props.trigger}
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert('This will move the assesment to progress section')} text='Move to progress section' />
                        <MenuOption onSelect={() => alert('This will archive the assesment')} text='Archive assesment' />
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
}