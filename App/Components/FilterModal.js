import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


// modal
const FilterModal = (openModal, onCloseModal) => {
    return (
        <Modal transparent={true} visible={openModal}>

            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                <View style={{ backgroundColor: "#ffffff", margin: 40, padding: 40, borderRadius: 10, flex: 1 }}>

                    <TouchableOpacity style={styles.closeButtonModal} onPress={() => onCloseModal()}>
                        <AntDesign name='closecircleo' style={styles.closeIconModal} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }} > Filter Assessments </Text>
                </View>
            </View>
        </Modal>
    );
};

// styles
const styles = StyleSheet.create({
    closeButtonModal: {
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    closeIconModal: {
        fontSize: 35,
        alignSelf: "center",
        paddingTop: 10,
        marginHorizontal: 15,
    }
});

// exports modal
export default FilterModal;