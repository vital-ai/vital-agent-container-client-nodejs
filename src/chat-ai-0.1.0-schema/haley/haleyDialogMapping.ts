import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyDialogMapping
 */
export class HaleyDialogMapping extends VITAL_Node {
  public dialogProfileURI?: string;
  public dialogText?: string;
  public mappedNodeInstanceURI?: string;
  public normalizedText?: string;
  public mappingType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyDialogMapping';
  }

  /**
   * Get property definitions for HaleyDialogMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDialogProfileURI',
        tsPropertyName: 'dialogProfileURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDialogText',
        tsPropertyName: 'dialogText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasMappedNodeInstanceURI',
        tsPropertyName: 'mappedNodeInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasNormalizedText',
        tsPropertyName: 'normalizedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasMappingType',
        tsPropertyName: 'mappingType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
