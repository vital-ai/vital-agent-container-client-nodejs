import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup
 */
export class HaleyQueryGroup extends VITAL_Node {
  public haleyQueryCaptureGroup?: boolean;
  public haleyQueryCaptureGroupName?: string;
  public haleyQueryGroupOptional?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup';
  }

  /**
   * Get property definitions for HaleyQueryGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQueryCaptureGroup',
        tsPropertyName: 'haleyQueryCaptureGroup',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQueryCaptureGroupName',
        tsPropertyName: 'haleyQueryCaptureGroupName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQueryGroupOptional',
        tsPropertyName: 'haleyQueryGroupOptional',
        type: 'boolean',
        required: false
      }
    ];
  }


}
