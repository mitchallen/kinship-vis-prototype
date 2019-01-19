import React, { Component } from 'react';

import './App.css';

import Tree from 'react-d3-tree';

const sourceTree = {
  nodes: [
    { root: true, id: 'ALLEN.1', name: 'Mitch Allen' },
    { id: 'WATERMAN.1', name: 'Virginia Allen', attributes: { birth: '1928', death: '2018' } },
    { id: 'ALLEN.2', name: 'Arthur Allen', attributes: { birth: '1928', death: '1988' } },
    { id: 'ALLEN.3', name: 'Joseph Allen' },
    { id: 'WATERMAN.2', name: 'Herbert Waterman', attributes: { birth: '1903', death: '1988' } },
    { id: 'WATERMAN.3', name: 'Charles Waterman', attributes: { birth: '1858', death: '1912' } },
    { id: 'SEVERANCE.1', name: 'Mary L/R Waternam', attributes: { birth: '1844', death: '1944' } },
    { id: 'SEVERANCE.2', name: 'Peter Severance', attributes: { circa: '1821' } },
    { id: 'SEVERANCE.3', name: 'Betsy Severance', attributes: { circa: '1808', death: '1857' } },
    { id: 'WEAVER.1', name: 'Benjamin Weaver', attributes: { estimated: '1743 - 1803' } },
    { id: 'WEAVER.2', name: 'Hanna Weaver', attributes: { estimated: '1743 - 1803' } },
    { id: 'KEMPF.1', name: 'Emma Waterman', attributes: { birth: '1868', death: '1944' } },
    {
      id: 'KEMPF.2', name: 'John Anton Kempf',
      attributes: {
        birth: '1819, Bavaria, Germany',
        death: '1898, Oak Grove Cemetery, Springfield, MA'
      }
    },
    { id: 'KEMPF.3', name: 'M Kempf' },
    { id: 'WATERMAN.4', name: 'Franklin Waterman' },
    {
      id: 'WATERMAN.5', name: 'Dexter Waterman II',
      attributes: {
        birth: '1799',
        death: '1880, West Cemetery, Shutesbury, MA'
      }
    },
    {
      id: 'SEVERANCE.100', name: 'Mary "Polly" E Waterman',
      attributes: {
        birth: '1806',
        death: '1868, West Cemetery, Shutesbury, MA'
      }
    },
    {
      id: 'SEVERANCE.101', name: "William Severance",
      attributes: { estimated: '1741 - 1801' }
    },
    {
      id: 'SEVERANCE.102', name: "Mary Severance",
      attributes: { estimated: '1741 - 1801' }
    },
    { id: 'WATERMAN.6', name: 'Dexter Waterman', attributes: { birth: '1773', death: '1872' } },
    { id: 'WATERMAN.6F', name: 'Betsy Waterman', attributes: { birth: '1777' } },
    { id: 'WATERMAN.7', name: 'Abraham Waterman', attributes: { birth: '1733', death: '1818' } },
    { id: 'HAWKINS.1', name: 'Jemima Waterman', attributes: { birth: '1708, Providence, RI' } },
    { id: 'HAWKINS.2', name: 'Edward Hawkins', attributes: { estimated: '1643-1703' } },
    { id: 'HAWKINS.3', name: 'Lydia Hawkins', attributes: { estimated: '1643-1703' } },
    { id: 'BROWN.1', name: 'Anne Waterman', attributes: { birth: '1732', death: '1817' } },
    { id: 'BROWN.2', name: 'John Brown', attributes: { birth: '1703' } },
    {
      id: 'BROWN.3', name: 'Anne Brown',
      attributes: {
        birth: '1702, Providence, RI'
      }
    },
    {
      id: 'DEXTER.1', name: 'Major John Dexter',
      attributes: {
        birth: '1652, Providence, RI',
        death: '1706'
      }
    },
    {
      id: 'DEXTER.2', name: 'Alice Jenckes',
      attributes: {
        circa: '1655, Pawtucket, RI',
        death: '1734'
      }
    },
    {
      id: 'SMITH.1', name: 'John "the Miller" Smith Jr.',
      attributes: {
        circa: '1642, Pawtucket, RI',
        death: '1683'
      }
    },
    {
      id: 'WHIPPLE.1', name: 'Sarah Arnold',
      attributes: {
        birth: '1641, Dorchester, MA',
        death: '1710, Providence, RI'
      }
    },
    {
      id: 'WHIPPLE.2', name: "Capt. John Whipple, Sr.",
      attributes: {
        birth: '1617, Milford, Pembrokeshire, Wales',
        death: '1685, North Burial Ground,Providence, RI'
      }
    },
    {
      id: 'WHIPPLE.3', name: "Sarah Whipple",
      attributes: {
        circa: '1624, Dorchester, MA',
        death: '1666, North Burial Ground,Providence, RI'
      }
    },
    {
      id: 'HUTCHINSON.1', name: "Richard Hutchinson",
      attributes: {
        birth: '1602, Nottinghamshire, England',
        death: '1682, Burying Point Cemetery, Salem, MA'
      }
    },
    {
      id: 'HUTCHINSON.2', name: "Alice Hutchinson",
      attributes: {
        birth: '1606, Southwell, Nottinghamshire, England',
        death: '1668, Burying Point Cemetery, Salem, MA'
      }
    },
    {
      id: 'INGOLDESBY.1', name: 'George Ingoldesby',
      attributes: {
        circa: '1560, Fishtoft, Lincolnshire, England',
        death: '1592, St. Guthiac Churchyard, Fishtoft, Lincolnshire, England'
      }
    },
    {
      id: 'INGOLDESBY.2', name: 'Mary Ingoldesby',
      attributes: {
        circa: '1561, England',
        death: '1592, Lincolnshire, UK'
      }
    },
    {
      id: 'INGOLDESBY.3', name: 'Richard Ingoldesby, Esq.',
      attributes: {
        circa: '1543, Lethenborough Manor, England',
        death: '1564, Lethenborough Manor, England'
      }
    },
    {
      id: 'INGOLDESBY.4', name: 'Winifred Ingoldesby',
      attributes: {
        circa: '1542, Compton, Buckinghamshire, England',
      }
    },
    {
      id: 'GREENWAY.1', name: 'Thomas Greenway',
      attributes: {
        circa: '1516, Compton, Buckinghamshire, England',
      }
    },
    {
      id: 'GREENWAY.2', name: 'Pony Greenway (Bucks)',
      attributes: {
        estimated: '1481-1541',
      }
    },
    {
      id: 'WATERMAN.8', name: 'Charles Waterman',
      attributes: {
        birth: '1705, Providence, RI',
        death: '1760, Providence, RI'
      }
    },
    {
      id: 'WATERMAN.9', name: 'Benjamin Waterman',
      attributes: {
        birth: '1670, Providence, RI',
        death: '1762, Johnsto, RI'
      }
    },
    {
      id: 'WATERMAN.A', name: 'Sarah Elizabeth Waterman',
      attributes: {
        circa: '1685, Warwick, Kent, Rhode Island',
        death: '1759, Waterford, New London, Connecticut'
      }
    },
    {
      id: 'KNIGHT.1', name: 'Captain Jonathan Knight, Sr.',
      attributes: {
        circa: '1653, Providence, RI',
        death: '1717, Providence, RI'
      }
    },
    {
      id: 'KNIGHT.2', name: 'Hannah Knight',
      attributes: {
        circa: '1649, Newport, RI',
        death: '1713, Providence, RI'
      }
    },
    {
      id: 'BENNET.1', name: 'Robert Bennett',
      attributes: {
        circa: '1618, England',
        death: '1677, Newport, Aquidneck Island, RI'
      }
    },
    {
      id: 'BENNET.2', name: 'Thomas Bennett',
      attributes: {
        circa: '1588, Pythouse, Tisbury, Wiltshire, England',
        death: '1663, Tisbury, Wiltshire, England'
      }
    },
    {
      id: 'THOMAS.1', name: 'Meliora Bennett',
      attributes: {
        circa: '1597, East Knoyle, Wiltshire, England',
        death: '1669, Stockton, Wiltshire, England'
      }
    },
    {
      id: 'WRAY.1', name: 'Rebecca Bennett',
      attributes: {
        birth: '1622, Lincolnshire, England',
        death: '1659, Newport, Aquidneck Island, RI'
      }
    },
    {
      id: 'WRAY.2', name: 'Christopher Wray, Kt.',
      attributes: {
        birth: '1601, Ashby, Lincolnshire, England',
        death: '1646, St. Giles in the Fields, London, England'
      }
    },
    {
      id: 'CECIL.1', name: 'Albinia Wray',
      attributes: {
        birth: '1603, Holland, Republiek der Zeven Verenigde Nederlanden',
        death: '1659, St. Giles in the Fields, London, England'
      }
    },
    {
      id: 'CECIL.2', name: 'Viscount Edward Cecil, 1st Viscount of Wimbledon',
      attributes: {
        birth: '1572, Stamford, Northamptonshire, England',
        death: '1638, Wimbledon, London, Middlesex, England'
      }
    },
    {
      id: 'CECIL.3', name: 'Viscountess Theodosia Cecil',
      attributes: {
        birth: '1573, Dalby, Leicestershire, England',
        death: '1615, Holland'
      }
    },
    { id: 'LENTZ.1', name: 'Edith Waterman', attributes: { birth: '1904', death: '1991' } },
    { id: 'LENTZ.2', name: 'Edwin Lentz' },
    { id: 'LENTZ.3', name: 'Elizabeth "Lizzie" Lentz' },
    { id: 'BARRETT.1', name: 'Bernice Allen' },
    { id: 'BARRETT.2', name: 'Sarah Barrett' },
    { id: 'BARRETT.3', name: 'Jethro Barrett' },
    { id: 'BARRETT.4', name: 'John Barrett' },
    { id: 'BARRETT.5', name: 'Nathaniel Barrett (1782)' },
    { id: 'BARRETT.6', name: 'John Barrett II (1707)' },
    { id: 'BARRETT.7', name: 'John Barrett (1675)' },
    { id: 'BARRETT.8', name: 'James Barrett (1644)' },
    { id: 'BARRETT.9', name: 'James Barrett (1615)' },
    { id: 'BARRETT.10', name: 'William Barrett (1550-1610)' },
  ],
  edges: [
    { child: 'ALLEN.1', parent: 'WATERMAN.1' },
    { child: 'ALLEN.1', parent: 'ALLEN.2' },
    { child: 'ALLEN.2', parent: 'ALLEN.3' },
    { child: 'WATERMAN.1', parent: 'WATERMAN.2' },
    { child: 'WATERMAN.2', parent: 'WATERMAN.3' },
    { child: 'WATERMAN.2', parent: 'KEMPF.1' },
    { child: 'WATERMAN.3', parent: 'WATERMAN.4' },
    { child: 'WATERMAN.3', parent: 'SEVERANCE.1' },
    { child: 'SEVERANCE.1', parent: 'SEVERANCE.2' },
    { child: 'SEVERANCE.1', parent: 'SEVERANCE.3' },
    { child: 'SEVERANCE.3', parent: 'WEAVER.1' },
    { child: 'SEVERANCE.3', parent: 'WEAVER.2' },
    { child: 'KEMPF.1', parent: 'KEMPF.2' },
    { child: 'KEMPF.1', parent: 'KEMPF.3' },
    { child: 'WATERMAN.4', parent: 'WATERMAN.5' },
    { child: 'WATERMAN.4', parent: 'SEVERANCE.100' },
    { child: 'SEVERANCE.100', parent: 'SEVERANCE.101' },
    { child: 'SEVERANCE.100', parent: 'SEVERANCE.102' },
    { child: 'WATERMAN.5', parent: 'WATERMAN.6' },
    { child: 'WATERMAN.5', parent: 'WATERMAN.6F' },
    { child: 'WATERMAN.6', parent: 'WATERMAN.7' },
    { child: 'WATERMAN.6', parent: 'BROWN.1' },
    { child: 'WATERMAN.7', parent: 'HAWKINS.1' },
    { child: 'HAWKINS.1', parent: 'HAWKINS.2' },
    { child: 'HAWKINS.1', parent: 'HAWKINS.3' },
    { child: 'BROWN.1', parent: 'BROWN.2' },
    { child: 'BROWN.1', parent: 'BROWN.3' },
    { child: 'BROWN.3', parent: 'DEXTER.1' },
    { child: 'BROWN.3', parent: 'DEXTER.2' },
    { child: 'DEXTER.2', parent: 'SMITH.1' },
    { child: 'DEXTER.2', parent: 'WHIPPLE.1' },
    { child: 'WHIPPLE.1', parent: 'WHIPPLE.2' },
    { child: 'WHIPPLE.1', parent: 'WHIPPLE.3' },
    { child: 'WHIPPLE.3', parent: 'HUTCHINSON.1' },
    { child: 'WHIPPLE.3', parent: 'HUTCHINSON.2' },
    { child: 'HUTCHINSON.2', parent: 'INGOLDESBY.1' },
    { child: 'HUTCHINSON.2', parent: 'INGOLDESBY.2' },
    { child: 'INGOLDESBY.1', parent: 'INGOLDESBY.3' },
    { child: 'INGOLDESBY.1', parent: 'INGOLDESBY.4' },
    { child: 'INGOLDESBY.4', parent: 'GREENWAY.1' },
    { child: 'INGOLDESBY.4', parent: 'GREENWAY.2' },
    { child: 'WATERMAN.7', parent: 'WATERMAN.8' },
    { child: 'WATERMAN.8', parent: 'WATERMAN.9' },
    { child: 'WATERMAN.8', parent: 'WATERMAN.A' },
    { child: 'WATERMAN.A', parent: 'KNIGHT.1' },
    { child: 'WATERMAN.A', parent: 'KNIGHT.2' },
    { child: 'KNIGHT.2', parent: 'BENNET.1' },
    { child: 'BENNET.1', parent: 'BENNET.2' },
    { child: 'BENNET.1', parent: 'THOMAS.1' },
    { child: 'KNIGHT.2', parent: 'WRAY.1' },
    { child: 'WRAY.1', parent: 'WRAY.2' },
    { child: 'WRAY.1', parent: 'CECIL.1' },
    { child: 'CECIL.1', parent: 'CECIL.2' },
    { child: 'CECIL.1', parent: 'CECIL.3' },
    { child: 'WATERMAN.1', parent: 'LENTZ.1' },
    { child: 'LENTZ.1', parent: 'LENTZ.2' },
    { child: 'LENTZ.1', parent: 'LENTZ.3' },
    { child: 'ALLEN.2', parent: 'BARRETT.1' },
    { child: 'BARRETT.1', parent: 'BARRETT.2' },
    { child: 'BARRETT.2', parent: 'BARRETT.3' },
    { child: 'BARRETT.3', parent: 'BARRETT.4' },
    { child: 'BARRETT.4', parent: 'BARRETT.5' },
    { child: 'BARRETT.5', parent: 'BARRETT.6' },
    { child: 'BARRETT.6', parent: 'BARRETT.7' },
    { child: 'BARRETT.7', parent: 'BARRETT.8' },
    { child: 'BARRETT.8', parent: 'BARRETT.9' },
    { child: 'BARRETT.9', parent: 'BARRETT.10' },
  ]
};

console.log(`individuals: ${sourceTree.nodes.length}`);

const treeData = [];

var roots = sourceTree.nodes.filter(el => el.root);
// TODO - verify only 1 root
var root = roots[0];

console.log(`ROOT: ${JSON.stringify(root, null, 2)}`)

function addChildren(node, depth) {
  return sourceTree.edges.filter(el => el.child === node.id).map(el => {
    var parentList = sourceTree.nodes.filter(el2 => el2.id === el.parent);
    if (!parentList || parentList.lenght === 0) return {};
    var parent = parentList[0];
    console.log(JSON.stringify(parent, null, 2));
    if (!parent.name || !parent.id) {
      return {};
    }
    parent.attributes = parent.attributes || {};
    if (depth >= 2) {
      parent.attributes.greatGrandParent = depth;
    }
    parent.children = addChildren(parent, depth + 1);
    return parent;
  })
}

root.children = addChildren(root, -1);

treeData.push(root);

class App extends Component {

  render() {

    return (
      <div className="App">
        <div id="treeWrapper" style={{ width: `1200px`, height: '1200px' }}>
          <Tree data={treeData} />
        </div>
      </div>
    );
  }
}

export default App;
