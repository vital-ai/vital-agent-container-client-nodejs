import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel
 */
export class HaleyTaxonomyModel extends VITAL_Node {
  public haleyTaxonomyBaseVersion?: string;
  public activeTaxonomyModel?: boolean;
  public haleyTaxonomyModelActivateDate?: string | Date;
  public haleyTaxonomyBase?: string;
  public haleyTaxonomyModelDeactivateDate?: string | Date;
  public currentHaleyTaxonomyModelVersionURI?: string;
  public currentHaleyTaxonomyModelVersion?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel';
  }

  /**
   * Get property definitions for HaleyTaxonomyModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion',
        tsPropertyName: 'haleyTaxonomyBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveTaxonomyModel',
        tsPropertyName: 'activeTaxonomyModel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelActivateDate',
        tsPropertyName: 'haleyTaxonomyModelActivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase',
        tsPropertyName: 'haleyTaxonomyBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelDeactivateDate',
        tsPropertyName: 'haleyTaxonomyModelDeactivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyTaxonomyModelVersionURI',
        tsPropertyName: 'currentHaleyTaxonomyModelVersionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyTaxonomyModelVersion',
        tsPropertyName: 'currentHaleyTaxonomyModelVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
