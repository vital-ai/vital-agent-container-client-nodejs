import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalSegment
 */
export class VitalSegment extends VITAL_Node {
  public segmentGraphURI?: string;
  public segmentNamespace?: string;
  public readOnly?: boolean;
  public segmentID?: string;
  public segmentTenantID?: string;
  public segmentStateJSON?: string;
  public segmentGlobal?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalSegment';
  }

  /**
   * Get property definitions for VitalSegment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentGraphURI',
        tsPropertyName: 'segmentGraphURI',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentNamespace',
        tsPropertyName: 'segmentNamespace',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isReadOnly',
        tsPropertyName: 'readOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentID',
        tsPropertyName: 'segmentID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentTenantID',
        tsPropertyName: 'segmentTenantID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentStateJSON',
        tsPropertyName: 'segmentStateJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isSegmentGlobal',
        tsPropertyName: 'segmentGlobal',
        type: 'boolean',
        required: false
      }
    ];
  }


}
