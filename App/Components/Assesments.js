import React from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import styles from '../styles/styles';

export default class Assesments extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MenuProvider skipInstanceCheck={true}>
                <SectionList
                    sections={[{ title: this.props.data.status, data: this.props.data }]}
                    renderItem={({ item, index }) => <Item data={item} navigation={this.props.navigation} />}
                    keyExtractor={(item, index) => item + index}
                    bounces={false} />
            </MenuProvider>
        )
    }
}

function Item({ data, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("AssesmentReport", { data: data })}>
            <View style={styles.assesmentConteiner}>
                <View style={{ alignItems: 'center', width: '50%' }}>
                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <Text style={styles.assesmentText}>Name</Text>
                        <Text>{data.name}</Text>
                    </View>
                    <Text style={styles.assesmentText}>Term</Text>
                    <Text>{data.term}</Text>
                </View>
                <View style={{ alignItems: 'center', width: '50%' }}>
                    <Text style={styles.assesmentText}>Course</Text>
                    <Text>{data.course}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


