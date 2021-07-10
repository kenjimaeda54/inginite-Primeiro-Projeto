import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { style } from './style';
import { ButtonAdd } from '../../components/button';
import { SkillCard } from '../../components/skill-card';

type ListSkillProps = {
  id: string;
  text: string;
};

export const Home = () => {
  const [textSkill, setTextSkill] = useState('');
  const [listSKill, setListSkill] = useState<ListSkillProps[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddText = () => {
    const data = {
      id: String(new Date().getTime()),
      text: textSkill,
    };

    setListSkill((oldState) => [...oldState, data]);
    setTextSkill('');
    /* e ideal pegar o estado antigo,no caso oldState,para evitar subscrever os novos estados */
    /*se nao colocar o ...oldState, nosso listSkill por ser  um array,
    vai ocasionar  array dentro de array [[estado antigo][estado novo]}
    e queremos evitar isso     */
  };

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return setGreeting('Bom dia');
    if (currentHour > 12 && currentHour <= 17) return setGreeting('Boa tarde');
    return setGreeting('Boa noite');
  }, []);

  const handleRemoveSkill = (id: string) => {
    setListSkill((oldState) => oldState.filter((skill) => skill.id !== id));
    /*cuido com arrow function, se usar anotação de objeto{} precisa do return
      se nao usar tudo bem bem,exemplo (oldState)=> {return sua lógica}  */
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Bem vindo, Ricardo</Text>
      <Text style={style.textGreeting}> {greeting} </Text>
      <TextInput
        placeholder="Suas skills"
        placeholderTextColor="#CCCC"
        onChangeText={setTextSkill}
        value={textSkill}
        style={style.textUser}
      />
      <ButtonAdd onPress={handleAddText} title="Add" />
      <Text style={[style.title, { marginVertical: 20 }]}>Minhas Skills</Text>

      <FlatList
        data={listSKill}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            data={item.text}
            onPress={() => handleRemoveSkill(item.id)}
            /*por estar passando parâmetro precisa ser anotação ()=>   */
          />
        )}
      />
    </View>
  );
};
