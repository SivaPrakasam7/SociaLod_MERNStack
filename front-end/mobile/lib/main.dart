import 'package:flutter/material.dart';
import 'assemblers/home.dart';
import 'assemblers/register.dart';
import 'assemblers/navigation.dart';

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
      body: Center(
        child: Home(),
      ),
      bottomNavigationBar: NavigationBar(),
    );
  }
}
