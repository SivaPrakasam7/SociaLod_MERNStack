import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Panel extends StatelessWidget {
  Panel({Key? key, required this.cont}) : super(key: key);
  final String cont;
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
        borderRadius: BorderRadius.all(Radius.circular(10.0)),
      ),
      margin: EdgeInsets.all(10.0),
      padding: EdgeInsets.all(10.0),
      child: Text('$cont'),
      height: 200,
      width: 200,
    );
  }
}
