import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Textfield extends StatelessWidget {
  Textfield(
      {required this.icon,
      required this.placeholder,
      required this.label,
      required this.type})
      : super();
  final String label;
  final String placeholder;
  final IconData icon;
  final bool type;
  bool focus = false;
  String value = "";

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 250,
      height: 50,
      margin: EdgeInsets.all(5.0),
      decoration: BoxDecoration(
        border: Border(
          bottom: BorderSide(
            width: 1.0,
            color: focus
                ? Colors.white.withOpacity(.5)
                : Colors.white.withOpacity(.1),
            style: BorderStyle.solid,
          ),
        ),
      ),
      child: TextFormField(
        obscureText: type,
        decoration: InputDecoration(
          icon: Icon(icon),
          hintText: '$placeholder',
          // labelText: '$label',
          border: InputBorder.none,
        ),
        onSaved: (String? value) {
          value = value;
        },
        validator: (String? value) {
          return (value != null && value.contains('@'))
              ? 'Do not use the @ char.'
              : null;
        },
      ),
    );
  }
}
