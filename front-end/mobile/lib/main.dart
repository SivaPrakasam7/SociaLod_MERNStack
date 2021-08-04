import 'package:flutter/material.dart';
import 'components/backgrounds/panel.dart';
import 'components/inputs/textfield.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SociaLod',
      theme: ThemeData.dark(),
      home: MyHomePage(title: 'SociaLod'),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super();
  final String title;
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          children: [
            Textfield(
              placeholder: "Your valid Email",
              icon: Icons.email_outlined,
              label: "Email",
              type: false,
            ),
            Textfield(
              placeholder: "Password",
              icon: Icons.password_outlined,
              label: "Password",
              type: true,
            ),
          ],
        ),
      ),
    );
  }
}
