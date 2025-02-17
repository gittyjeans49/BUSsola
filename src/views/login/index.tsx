import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Button, IconButton, Stack, Text, TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Login({ navigation }: any) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [senhaVisivel, setSenhaVisivel] = useState(false); // [true, false]

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const logo = require("../../../assets/logo.png");

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={"padding"}
			contentContainerStyle={{ flex: 1 }}
		>
			<Image source={logo} />

			<Stack style={styles.meio}>
				<TextInput
					variant="filled"
					label="Email"
					value={email}
					onChangeText={setEmail}
					style={styles.input}
					keyboardType="email-address"
					leading={props => <Icon name="email" {...props} />}
				/>

				<TextInput
					variant="filled"
					label="Senha"
					value={senha}
					onChangeText={setSenha}
					style={styles.input}
					keyboardType="default"
					leading={props => <Icon name="lock" {...props} />}
					secureTextEntry={!senhaVisivel}
					trailing={props => (
						<IconButton
							icon={props => !senhaVisivel ? <Icon name="eye-off" {...props} /> : <Icon name="eye" {...props} />}
							{...props}
							onPress={() => { setSenhaVisivel(!senhaVisivel); }}
						/>
					)}
				/>

				<TouchableOpacity onPress={() => navigation.navigate("recuperar-senha")}>
					<Text style={styles.texto}>
						Esqueceu sua senha?
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate("cadastro")}>
					<Text style={styles.texto}>
						Não tem uma conta?
					</Text>
				</TouchableOpacity>
			</Stack>

			<Button
				title={"Login"}
				style={styles.botao}
				disabled={email.length === 0 || senha.length === 0}
				onPress={() => { navigation.navigate("home"); }}
				trailing={props => <Icon name="login" {...props} />}
			/>
		</KeyboardAvoidingView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#000",
		paddingVertical: 50,
	},
	meio: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 50,
	},
	input: {
		width: "80%",
		marginBottom: 10,
		padding: 10,
	},
	texto: {
		color: "#B7B7B7",
	},
	botao: {
		width: "80%",
		padding: 10,
	}
});