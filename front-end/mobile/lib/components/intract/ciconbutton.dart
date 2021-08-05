import 'package:flutter/material.dart';

class Ciconbutton extends StatelessWidget {
  Ciconbutton({required this.icon}) : super();
  final Icon icon;

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          border: Border.all(
            color: Colors.white.withOpacity(.05),
            style: BorderStyle.solid,
          ),
          gradient: LinearGradient(begin: Alignment.topLeft, stops: [
            0.1,
            0.3,
            0.9
          ], colors: [
            Colors.white.withOpacity(.3),
            Colors.white.withOpacity(.15),
            Colors.white.withOpacity(.05)
          ]),
          borderRadius: BorderRadius.all(Radius.circular(100.0)),
        ),
        margin: EdgeInsets.all(5.0),
        child: IconButton(onPressed: () {}, icon: icon));
  }
}
