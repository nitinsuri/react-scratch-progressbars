import React from 'react';
import SelectBox from '../SelectBox/SelectBox';

const SectionHeader = props => <div id="section-header">
    <h2>Women's tops</h2>
    <SelectBox onChange={this.handleChange} options={this.props.filterData} usedFor="sizeFilter" />
</div>
export default SectionHeader;