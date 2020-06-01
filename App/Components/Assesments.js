import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Image, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import styles from '../styles/styles';

export default class Assesments extends React.Component {
    constructor(props) {
        super(props);

        this.state = { refreshing: false };
    }

    onRefresh() {
        this.setState({ refreshing: true });

        this.props.loadAgain();

        //Clear old data of the list
        this.setState({ refreshing: false });

    }

    render() {

        // is the data is still loading, do nothing
        if (this.props.isLoading) return null;


        // if there is assessment avilable
        if (this.props.data.length > 0) {
            return (
                <MenuProvider skipInstanceCheck={true}>
                    <SectionList
                        sections={[{ title: this.props.data.status, data: this.props.data }]}
                        renderItem={({ item, index }) => <Item data={item} navigation={this.props.navigation} />}
                        keyExtractor={(item, index) => item + index}
                        refreshControl={
                            <RefreshControl
                                //refresh control used for the Pull to Refresh
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh.bind(this)}
                            />
                        }
                        bounces={false} />
                </MenuProvider>
            )
        } else {
            return (
                <View style={innerStyle.container}>

                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                //refresh control used for the Pull to Refresh
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh.bind(this)}
                            />
                        }
                    >

                        <Image
                            style={styles.notFoundImage}
                            source={require('../../assets/not_found.png')}
                        />
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            It looks like there is not Assessments for this section.
                        </Text>

                    </ScrollView>
                </View>
            );
        }
    }
}

function Item({ data, navigation }) {


    return (
        <TouchableOpacity onPress={() => navigation.navigate("AssesmentReport", { data: data })}>
            <View style={styles.assesmentConteiner}>

                <View style={{ alignItems: 'center', width: '50%' }}>

                    <View style={{ alignItems: 'center', marginBottom: 10 }}>

                        <Text style={styles.assesmentText}>{data.name}</Text>
                    </View>

                    <Text style={styles.assesmentText}>Term</Text>
                    <Text>{data.term_name}</Text>

                </View>

                <View style={{ alignItems: 'center', width: '50%'}}>
                    <Text style={styles.assesmentText}>Course</Text>
                    <Text style={{ textAlign: "center" }}>{data.course_name} - {data.outc_name}</Text>
                    <Text style={{ textAlign: "center", paddingTop: 5, fontStyle: "italic", fontSize: 12 }}>{data.dep_name}</Text>
                </View>

            </View>
        </TouchableOpacity>

    );
}

const innerStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})