import 'package:flutter/material.dart';
import '../components/intract/ciconbutton.dart';

class NavigationBar extends StatelessWidget {
  Widget build(BuildContext context) {
    return SizedBox(
      child: Container(
        margin: EdgeInsets.all(10.0),
        padding: EdgeInsets.all(0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
          Ciconbutton(icon: Icon(Icons.home)),
          Ciconbutton(icon: Icon(Icons.search)),
          Ciconbutton(icon: Icon(Icons.settings)),
        ]),
      ),
    );
  }
}