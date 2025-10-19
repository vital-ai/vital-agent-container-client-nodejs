import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroup
 */
export class HaleyGroup extends VITAL_Node {
  public groupIndex?: number;
  public haleyGroupBase?: string;
  public haleyGroupBaseVersion?: string;
  public defaultPrecedence?: number;
  public haleyGroupNatureTypeURI?: string;
  public haleyGroupTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyGroup';
  }

  /**
   * Get property definitions for HaleyGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasGroupIndex',
        tsPropertyName: 'groupIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase',
        tsPropertyName: 'haleyGroupBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion',
        tsPropertyName: 'haleyGroupBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDefaultPrecedence',
        tsPropertyName: 'defaultPrecedence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupNatureTypeURI',
        tsPropertyName: 'haleyGroupNatureTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupTypeURI',
        tsPropertyName: 'haleyGroupTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
