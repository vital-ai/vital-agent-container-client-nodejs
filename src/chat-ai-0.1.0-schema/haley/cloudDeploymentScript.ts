import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudDeploymentScript
 */
export class CloudDeploymentScript extends HaleyCloud {
  public deploymentScriptCode?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudDeploymentScript';
  }

  /**
   * Get property definitions for CloudDeploymentScript
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDeploymentScriptCode',
        tsPropertyName: 'deploymentScriptCode',
        type: 'string',
        required: false
      }
    ];
  }


}
