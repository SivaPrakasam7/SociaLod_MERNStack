import 'package:flutter/material.dart';

class Ptitle extends StatelessWidget {
  Ptitle({required this.title}) : super();
  final String title;

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),
    );
  }
}
