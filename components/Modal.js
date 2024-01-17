import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';

const PillOption = ({ text, active, onPress }) => (
    <TouchableOpacity
    className={`px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 ${active ? 'bg-primary-500 dark:bg-primary-700' : ''}`}
    onPress={onPress}
  >
    <Text className="text-base text-center">{text}</Text>
  </TouchableOpacity>
);

const SwipeModal = ({ visible, onClose, options, onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipeLeft = () => setActiveIndex((prev) => (prev === 0 ? options.length - 1 : prev - 1));
  const handleSwipeRight = () => setActiveIndex((prev) => (prev === options.length - 1 ? 0 : prev + 1));

  return (
    <Modal visible={visible} animationType="slide">
      <View className="flex flex-col items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-800">
        <Text className="text-2xl font-bold mb-4">"options[activeIndex].title"</Text>
        <View className="flex flex-row rounded-lg overflow-hidden">
          
            <PillOption
              text="Bunch"
              active={0 === activeIndex}
              onPress={() => {
                setActiveIndex(0);
                onSelect(option);
              }}
            />
            <PillOption
              text="single"
              active={1 === activeIndex}
              onPress={() => {
                setActiveIndex(1);
                onSelect(option);
              }}
            />
        </View>
        <View className="flex flex-row my-8">
          <TouchableOpacity className="flex-1 pr-4" onPress={handleSwipeLeft}>
            <Text className="text-base text-gray-400 dark:text-gray-300">&lt; swipe</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1" onPress={onClose}>
            <Text className="text-base text-primary-500 dark:text-primary-700" >Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 pl-4" onPress={handleSwipeRight} >
            <Text className= "text-base text-primary-500 dark:text-primary-700">Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default SwipeModal