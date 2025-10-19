import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion
 */
export class HaleyGroupModelVersion extends VITAL_Node {
  public haleyGroupModelVersionDeactivateDate?: string | Date;
  public haleyGroupBase?: string;
  public haleyGroupBaseVersion?: string;
  public activeGroupModelVersion?: boolean;
  public haleyGroupModelVersionActivateDate?: string | Date;
  public haleyGroupModelURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion';
  }

  /**
   * Get property definitions for HaleyGroupModelVersion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelVersionDeactivateDate',
        tsPropertyName: 'haleyGroupModelVersionDeactivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveGroupModelVersion',
        tsPropertyName: 'activeGroupModelVersion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelVersionActivateDate',
        tsPropertyName: 'haleyGroupModelVersionActivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelURI',
        tsPropertyName: 'haleyGroupModelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
