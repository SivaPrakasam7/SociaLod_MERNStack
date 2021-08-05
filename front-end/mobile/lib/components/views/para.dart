import 'package:flutter/material.dart';

class Paragraph extends StatelessWidget {
  Paragraph({required this.cont}) : super();
  final String cont;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(10.0),
      child: Text(
        cont,
        textAlign: TextAlign.justify,
      ),
    );
  }
}
