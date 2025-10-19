import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSegment
 */
export class KGSegment extends VITAL_Node {
  public vitalSegmentURI?: string;
  public vitalSegmentID?: string;
  public kGSegmentAccessTypeURI?: string;
  public kGSegmentGraphURI?: string;
  public kGSegmentTypeURI?: string;
  public kGSegmentAccessAccountURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSegment';
  }

  /**
   * Get property definitions for KGSegment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasVitalSegmentURI',
        tsPropertyName: 'vitalSegmentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasVitalSegmentID',
        tsPropertyName: 'vitalSegmentID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSegmentAccessTypeURI',
        tsPropertyName: 'kGSegmentAccessTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSegmentGraphURI',
        tsPropertyName: 'kGSegmentGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSegmentTypeURI',
        tsPropertyName: 'kGSegmentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSegmentAccessAccountURI',
        tsPropertyName: 'kGSegmentAccessAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
